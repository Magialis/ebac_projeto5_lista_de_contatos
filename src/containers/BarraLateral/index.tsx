import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { RootReducer } from '../../store'
import ContatoClass from '../../models/Contato'
import {
  editar as editarContato,
  adicionar as adicionarContato
} from '../../store/reducers/contatos'

import * as S from './styles'

type Props = {
  trocaTema: () => void
}

const BarraLateral = (props: Props) => {
  const { id } = useParams()
  const estaEditando = Boolean(id)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const contato = itens.find((c) => c.id === Number(id))

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [erro, setErro] = useState('')
  const [telefoneJaExisteErro, setTelefoneJaExisteErro] = useState('')
  const [sucesso, setSucesso] = useState('')

  const nomeInputRef = useRef<HTMLInputElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (contato) {
      setNome(contato.nome)
      setEmail(contato.email)
      setTelefone(contato.telefone)
    } else {
      setNome('')
      setEmail('')
      setTelefone('')
    }

    setErro('')
    setTelefoneJaExisteErro('')
    setSucesso('')
    nomeInputRef.current?.focus()
  }, [contato])

  useEffect(() => {
    // Cleanup do timeout quando o componente desmonta
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const formatarTelefone = (valor: string) => {
    const apenasNumeros = valor.replace(/\D/g, '')

    if (apenasNumeros.length <= 10) {
      return apenasNumeros.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
    }

    return apenasNumeros.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setSucesso('') // Limpa sucesso anterior

    if (!nome || !email || !telefone) {
      setErro('Por favor, preencha todos os campos.')
      return
    }

    const telefoneSemFormatacao = telefone.replace(/\D/g, '')
    const telefoneExistente = itens.some(
      (c) => c.telefone.replace(/\D/g, '') === telefoneSemFormatacao && c.id !== Number(id)
    )

    if (telefoneExistente) {
      setTelefoneJaExisteErro('Um contato com esse número de telefone já existe.')
      return
    }

    if (estaEditando && id) {
      const contatoEditado = new ContatoClass(nome, email, telefone, Number(id))
      dispatch(editarContato(contatoEditado))
      setSucesso('Contato atualizado!')
    } else {
      const novoId = Math.max(0, ...itens.map((c) => c.id)) + 1
      const novoContato = new ContatoClass(nome, email, telefone, novoId)
      dispatch(adicionarContato(novoContato))
      setSucesso('Contato adicionado!')
    }

    // Limpa timeout anterior e cria novo para sumir a mensagem de sucesso
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setSucesso(''), 3000)

    setNome('')
    setEmail('')
    setTelefone('')
    setErro('')
    setTelefoneJaExisteErro('')

    navigate('/')
  }

  return (
    <S.Aside>
      <S.Titulo>{estaEditando ? 'Editar contato' : 'Adicionar novo contato'}</S.Titulo>
      <S.Form onSubmit={handleSubmit}>
        <S.Campo
          ref={nomeInputRef}
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value)
            setErro('')
          }}
        />
        <S.Campo
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setErro('')
          }}
        />
        <S.Campo
          type="text"
          placeholder="Telefone"
          value={telefone}
          maxLength={15}
          onChange={(e) => {
            const valorFormatado = formatarTelefone(e.target.value)
            setTelefone(valorFormatado)
            setErro('')
            setTelefoneJaExisteErro('')
          }}
        />
        {erro && <S.MensagemErro>{erro}</S.MensagemErro>}
        {telefoneJaExisteErro && (
          <S.MensagemErro>{telefoneJaExisteErro}</S.MensagemErro>
        )}
        {sucesso && (
          <S.MensagemSucesso>{sucesso}</S.MensagemSucesso>
        )}
        <S.BotaoAdicionar type="submit">
          {estaEditando ? 'Salvar' : 'Adicionar'}
        </S.BotaoAdicionar>
        {estaEditando && (
          <S.BotaoCancelar type="button" onClick={() => navigate('/')}>
            Cancelar
          </S.BotaoCancelar>
        )}
      </S.Form>
      <S.BotaoTema onClick={props.trocaTema}>Tema escuro</S.BotaoTema>
    </S.Aside>
  )
}

export default BarraLateral

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  UserIcon,
  PencilSimpleLineIcon,
  TrashIcon,
  EnvelopeSimpleIcon,
  PhoneIcon
} from '@phosphor-icons/react'

import * as S from './styles'

import ContatoClass from '../../models/Contato'
import { remover } from '../../store/reducers/contatos'


type Props = ContatoClass

const Contato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const confirmarRemocao = () => {
    const confirmacao = window.confirm(`Tem certeza que deseja remover o contato "${nome}"?`)
    if (confirmacao) {
      dispatch(remover(id))
    }
  }

  return (
    <>
      <S.Nome>
        <UserIcon size={60} weight="thin" />
        {nome}
      </S.Nome>
      <S.Botoes>
        <button className="editar" onClick={() => navigate(`/editar/${id}`)}>
          <PencilSimpleLineIcon weight="thin" />
        </button>
        <button className="remover" onClick={confirmarRemocao}>
          <TrashIcon weight="thin" />
        </button>
      </S.Botoes>
      <S.Email>
        <EnvelopeSimpleIcon className="mail" weight="thin" />
        {email}
      </S.Email>
      <S.Phone>
        <PhoneIcon className="phone" weight="thin" />
        {telefone}
      </S.Phone>
      <S.Divisao />
    </>
  )
}

export default Contato

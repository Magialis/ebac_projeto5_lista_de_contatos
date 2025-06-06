import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'
import Contato from '../../components/Contato'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.Container>
      <S.CelularContainer>
        <S.CelularDetalhe />
        <S.CelularBotaoLateral />
        <S.Titulo>Contatos</S.Titulo>
        <S.ContatosContainer>
          {itens.length === 0 ? (
            <S.Mensagem>Você ainda não adicionou nenhum contato</S.Mensagem>
          ) : (
            <ul>
              {itens.map((c) => (
                <li key={c.id}>
                  <Contato
                    nome={c.nome}
                    email={c.email}
                    telefone={c.telefone}
                    id={c.id}
                  />
                </li>
              ))}
            </ul>
          )}
        </S.ContatosContainer>
        <S.CelularBotao />
      </S.CelularContainer>
    </S.Container>
  )
}

export default ListaDeContatos

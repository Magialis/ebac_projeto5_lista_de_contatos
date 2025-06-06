import styled from 'styled-components'

export const Nome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.corDeTexto};
  margin-bottom: 8px;
  gap: 4px;
`

export const Botoes = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  button {
    height: 40px;
    width: 40px;
    font-size: 24px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;

    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  .editar {
    color: ${(props) => props.theme.corDeTextoBotaoEditar};
    background-color: ${(props) => props.theme.corDeFundoBotaoEditar};
  }

  .remover {
    color: #fff;
    background-color: #9a2a2a;
  }
`

const BaseInfo = styled.div`
  display: flex;
  align-items: center;
  max-width: 380px;
  margin: 10px auto 0 auto;
  color: ${(props) => props.theme.corDeTexto};
  background-color: ${(props) => props.theme.corDeFundoContatoInfo};
  border-radius: 50px;
  padding: 14px 20px;
  gap: 20px;

  svg {
    font-size: 24px;
  }
`

export const Email = styled(BaseInfo)``
export const Phone = styled(BaseInfo)``

export const Divisao = styled.hr`
  width: 380px;
  height: 1px;
  background-color: ${(props) => props.theme.corDeTexto};
  margin: 40px auto;
  border: none;
`

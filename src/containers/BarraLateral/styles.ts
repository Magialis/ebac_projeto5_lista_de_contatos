import styled from 'styled-components'

export const Aside = styled.aside`
  background-color: ${(props) => props.theme.corDeFundoAside};
  height: 100vh;
`

export const Titulo = styled.p`
  font-size: 34px;
  text-align: center;
  margin: 100px 0 40px;
  color: ${(props) => props.theme.corDeTexto};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 0 auto;
`
export const Campo = styled.input`
  border-radius: 50px;
  padding: 10px 0 10px 20px;
  color: ${(props) => props.theme.corDeTexto};
  border: 1px solid ${(props) => props.theme.corDaBorda};
  background-color: transparent;
  margin-bottom: 10px;
  font-size: 16px;
`

const BotaoBase = styled.button`
  padding: 14px 24px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`

export const BotaoAdicionar = styled(BotaoBase)`
  align-self: flex-end;
  background-color: #569739;
`
export const BotaoCancelar = styled(BotaoBase) `
  margin-top: 10px;
  align-self: flex-end;
  background-color: #9a2a2a;
`

export const BotaoTema = styled(BotaoBase)`
  position: fixed;
  left: 50px;
  bottom: 400px;
  color: ${(props) => props.theme.corDeTextoBotaoTema};
  background-color: ${(props) => props.theme.corDeFundoBotaoTema};
`

export const MensagemErro = styled.p`
  color: #9a2a2a;
  margin: 10px 0;
`

export const MensagemSucesso = styled.p`
  color: #569739;
  margin: 10px 0;
`

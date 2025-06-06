import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const CelularContainer = styled.div`
  width: 510px;
  height: 90vh;
  background: ${(props) => props.theme.corDeFundoMain};
  border: 16px solid ${(props) => props.theme.corDoCelular};
  border-radius: 40px;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`

export const CelularDetalhe = styled.div`
  width: 260px;
  height: 32px;
  background: ${(props) => props.theme.corDoCelular};
  border-radius: 50px;
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
`

export const CelularBotao = styled.div`
  width: 60px;
  height: 60px;
  background: ${(props) => props.theme.corDeFundoContatoInfo};
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`

export const CelularBotaoLateral = styled.div`
  width: 24px;
  height: 150px;
  background: ${(props) => props.theme.corDoCelular};
  position: absolute;
  right: -24px;
  top: 180px;
  border-radius: 50px;
`

export const ContatosContainer = styled.div`
  margin: 30px 10px;
  height: 60vh;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.corDeFundoContatoInfo} ${(props) => props.theme.corDeFundoMain};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.corDeFundoContatoInfo};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.corDeFundoMain};
  }
`


export const Titulo = styled.p`
  text-align: center;
  margin-top: 56px;
  font-size: 44px;
  color: ${(props) => props.theme.corDeTexto};
`
export const Mensagem = styled.div`
  text-align: center;
  margin-top: 32px;
  color: ${(props) => props.theme.corDeTexto};
`

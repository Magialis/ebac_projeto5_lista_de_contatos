import styled, { createGlobalStyle } from 'styled-components'


const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    list-style: none;

    body {
      background-color: ${(props) => props.theme.corDeFundoMain};
    }
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 480px auto;
`

export default EstiloGlobal

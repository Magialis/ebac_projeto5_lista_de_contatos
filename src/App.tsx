import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'

import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro' // usaremos só para editar
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import temaDark from './styles/themes/dark'
import temaLight from './styles/themes/light'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home trocaTema={trocaTema} />
    },
    {
      path: '/editar/:id',
      element: <Cadastro trocaTema={trocaTema} />
    }
  ])

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <Provider store={store}>
        <EstiloGlobal />
        <Container>
          <RouterProvider router={rotas} />
        </Container>
      </Provider>
    </ThemeProvider>
  )
}

export default App

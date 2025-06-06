import ListaDeContatos from '../../containers/ListaDeContatos'
import BarraLateral from '../../containers/BarraLateral'

type Props = {
  trocaTema: () => void
}

const Home = ({ trocaTema }: Props) => {
  return (
    <>
      <BarraLateral trocaTema={trocaTema} />
      <ListaDeContatos />
    </>
  )
}

export default Home

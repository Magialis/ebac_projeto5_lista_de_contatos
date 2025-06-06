import ListaDeContatos from '../../containers/ListaDeContatos'
import BarraLateral from '../../containers/BarraLateral'

type Props = {
  trocaTema: () => void
}

const Editar = ({ trocaTema }: Props) => {
  return (
    <>
      <BarraLateral trocaTema={trocaTema} />
      <ListaDeContatos />
    </>
  )
}

export default Editar

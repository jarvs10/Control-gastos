import Gasto from "./Gasto"

const ListaGastos = ({gastos}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ? 'Gastos' : 'No se han Agregado Gastos'}</h2>

        {gastos.map(gasto => {
            return (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                />
            )
        })}
    </div>
  )
}

export default ListaGastos
import Gasto from "./Gasto"

const ListaGastos = ({ gastos, setEditarGasto, eliminarId, gastosFiltrados, filtros }) => {
    return (
        <div className="listado-gastos contenedor">
            {
                filtros ? (
                    <>
                        <h2>{gastosFiltrados.length ? 'Gastos' : 'No se han Agregado Gastos'}</h2>
                        {gastosFiltrados.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setEditarGasto={setEditarGasto}
                                eliminarId={eliminarId}
                            />))}
                    </>

                ) : (
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No se han Agregado Gastos'}</h2>
                        {gastos.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setEditarGasto={setEditarGasto}
                                eliminarId={eliminarId}
                            />))}
                    </>
                )
            }
        </div>
    )
}

export default ListaGastos
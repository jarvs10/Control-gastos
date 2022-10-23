import { generarFecha } from "../helpers";

const Gasto = ({ gasto }) => {

    const {nombre, cantidad, filtrar, fecha} = gasto;

    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <div className="descripcion-gasto">
                    <p className="categoria">{filtrar}</p>
                    <p className="nombre-gasto">{nombre}</p>
                    <p className="fecha-gasto">
                        Agregado el: {''}
                        <span>{generarFecha(fecha)}</span>
                    </p>
                </div>
            </div>
            <p className="cantidad-gasto">${cantidad}</p>
        </div>
    )
}

export default Gasto
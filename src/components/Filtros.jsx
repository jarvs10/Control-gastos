import { useEffect } from "react"
import { useState } from "react"

const Filtros = ({filtros, setFiltros}) => {

    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label htmlFor="gastos">Filtrar Gastos</label>
                    <select 
                        value={filtros} 
                        onChange={ e => setFiltros(e.target.value)}
                        id="gastos"
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="casa">Casa</option>
                        <option value="ocio">Ocio</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="comida">Comida</option>
                        <option value="salud">Salud</option>
                        <option value="varios">Gastos Varios</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros
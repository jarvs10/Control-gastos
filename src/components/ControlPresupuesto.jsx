import React from 'react'

const ControlPresupuesto = ({ presupuesto }) => {

    const handlePresupuesto = cantidad => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafica aqui</p>
            </div>

            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto:</span> {handlePresupuesto(presupuesto)}
                </p>

                <p>
                    <span>Disponible:</span> {handlePresupuesto(0)}
                </p>

                <p>
                    <span>Gastado:</span> {handlePresupuesto(0)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto
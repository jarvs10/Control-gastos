import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect } from 'react';
import { useState } from 'react';

const ControlPresupuesto = ({ presupuesto, gastos }) => {

    const [porcentaje, setPorcentaje] = useState(0);

    const [disponible, setDisponible] = useState(0);

    const [gastado, setGastado] = useState(0);

    const handlePresupuesto = cantidad => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    useEffect(() => {
      const totalGastado = gastos.reduce((total, suma) => total + suma.cantidad, 0);

      setGastado(totalGastado);

      const totalDisponible = presupuesto - totalGastado;

      // calcular porcentaje //
      const calcularPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

      setTimeout(() => {
        setPorcentaje(calcularPorcentaje);
      }, 1000);
      
      setDisponible(totalDisponible)
      
    }, [gastos])

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar 
                    value={porcentaje}
                    styles={buildStyles({
                        pathColor: '#3D82f6',
                        trailColor: '#ccc',
                        textColor: '#2462cc'
                    })}
                    text={`${porcentaje}% gastado`}
                />
            </div>

            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto:</span> {handlePresupuesto(presupuesto)}
                </p>

                <p>
                    <span>Disponible:</span> {handlePresupuesto(disponible)}
                </p>

                <p>
                    <span>Gastado:</span> {handlePresupuesto(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto
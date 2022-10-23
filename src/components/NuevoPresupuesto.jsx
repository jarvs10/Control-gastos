import React from 'react';
import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValid }) => {

    const [mensaje, setMensaje] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if(presupuesto <= 0){
            setMensaje('Presupuesto Invalido');

            return;
        }

        setIsValid(true);

        setMensaje('');
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>

            <form onSubmit={handleSubmit} className='formulario'>
                <div className='campo'>
                    <label>Definir Presupuesto</label>

                    <input
                        className='nuevo-presupuesto'
                        type="number"
                        placeholder='Agregar Presupuesto'
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                </div>

                <input type="submit" value="Agregar" />

                {
                    mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>
                }
            </form>


        </div>
    )
}

export default NuevoPresupuesto
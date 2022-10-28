import { useEffect, useState } from 'react';
import CerrarBtn from '../img/cerrar.svg';
import Mensaje from './Mensaje';

const Modal = ({setModal, animarModal, setAnimarModal, guardarGastos, editarGasto}) => {

    const [mensaje, setMensaje] = useState('');

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [filtrar, setFiltrar] = useState('');
    const [id, setId] = useState('');
    const [fecha, setFecha] = useState('');

    useEffect(() => {
        if(Object.keys(editarGasto).length > 0){
            setNombre(editarGasto.nombre)
            setCantidad(editarGasto.cantidad)
            setFiltrar(editarGasto.filtrar)
            setId(editarGasto.id)
            setFecha(editarGasto.fecha)
        }
    }, [])

    const handleCerrar = () => {
        setModal(false);

        setTimeout(() => {
            setAnimarModal(false)
        }, 1000);
    };

    const handleAgregarGasto = (e) => {
        e.preventDefault();

        const datos = [nombre, cantidad, filtrar];

        if(datos.includes('')){
            setMensaje('Todos los campos son obligatorios');

            setTimeout(() => {
                setMensaje('')
            }, 2000);

            return;
        }

        guardarGastos({nombre, cantidad, filtrar, id, fecha})
    
        setNombre('');
        setCantidad('');
        setFiltrar('');
    };

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    onClick={handleCerrar}
                    src={CerrarBtn}
                    alt="cerrar modal"
                />
            </div>

            <form onSubmit={handleAgregarGasto} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>{editarGasto.nombre ? 'Editar' : 'Nuevo Gasto'}</legend>

                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>

                    <input 
                        id='nombre'
                        type="text"
                        placeholder='Agregar Gasto'
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>

                    <input 
                        id='cantidad'
                        type="number"
                        placeholder='Agregar Cantidad'
                        value={cantidad}
                        onChange={ e => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Filtrar Gastos</label>

                    <select id="categoria"
                        value={filtrar}
                        onChange={ e => setFiltrar(e.target.value)}
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

                <input type="submit" value={editarGasto.nombre ? 'Guardar Cambios' : 'Agregar'} />
            </form>
        </div>
    )
}

export default Modal
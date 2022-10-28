import { useEffect } from 'react';
import { useState } from 'react';
import Filtros from './components/Filtros';
import Header from './components/Header';
import ListaGastos from './components/ListaGastos';
import Modal from './components/Modal';
import { generarId } from './helpers';
import IconoNewGasto from './img/nuevo-gasto.svg';

function App() {

    const [presupuesto, setPresupuesto] = useState(
        Number(localStorage.getItem('presupuesto')) ?? 0
    );

    const [isValid, setIsValid] = useState(false);

    const [modal, setModal] = useState(false);

    const [animarModal, setAnimarModal] = useState(false);

    const [gastos, setGastos] = useState(
        localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
    );

    const [editarGasto, setEditarGasto] = useState({});

    const [filtros, setFiltros] = useState('');

    const [gastosFiltrados, setGaastosFiltrados] = useState([]);

    const eliminarId = (id) => {
        const gastoActualizado = gastos.filter(gasto => gasto.id !== id);

        setGastos(gastoActualizado)
    }

    useEffect(() => {
        if(Object.keys(editarGasto).length > 0){
            setModal(true);

            setTimeout(() => {
                setAnimarModal(true);
        }, 1000);
        }
    }, [editarGasto])

    useEffect(() => {
      if(filtros){
        const filtroActualizado = gastos.filter(gasto => gasto.filtrar === filtros)
        
        setGaastosFiltrados(filtroActualizado);
      }
    }, [filtros])

    useEffect(() => {
      localStorage.setItem('presupuesto', presupuesto ?? 0 );
    }, [presupuesto])

    useEffect(() => {
      localStorage.setItem('gastos', JSON.stringify(gastos) ?? [] )
    }, [gastos])

    useEffect(() => {
      const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;

      if(presupuestoLS > 0){
        setIsValid(true);
      }
    }, [])

    const handleNewGasto = () => {
        setModal(true);
        setEditarGasto({});

        setTimeout(() => {
            setAnimarModal(true);
        }, 1000);
    }

    const guardarGastos = (gasto) => {
        if(gasto.id){
            // editando //
            const gastoUpdate = gastos.map(gastostate => gastostate.id === gasto.id ? gasto : gastostate)

            setGastos(gastoUpdate);
            setEditarGasto({});
            setModal(false);
            
        } else {
            // agregando //
            gasto.id = generarId();
            gasto.fecha = Date.now();
            setGastos([...gastos, gasto]);
            setModal(false);
        }
    }

    return (
        <div className={modal ? 'fijar': ''}>
            <Header
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValid={setIsValid}
                isValid={isValid}
                gastos={gastos}
            />

            {isValid && (
                <>
                    <main>
                        <Filtros 
                            filtros={filtros}
                            setFiltros={setFiltros}
                        />

                        <ListaGastos 
                            gastos={gastos}
                            setEditarGasto={setEditarGasto}
                            eliminarId={eliminarId}
                            filtros={filtros}
                            gastosFiltrados={gastosFiltrados}
                        />
                    </main>

                    <div className='nuevo-gasto'>
                        <img
                            src={IconoNewGasto}
                            alt="icono-new-gasto"
                            onClick={handleNewGasto}
                        />
                    </div>
                </>
            )}

            {modal &&
                <Modal
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    guardarGastos={guardarGastos}
                    editarGasto={editarGasto}
                />}

        </div>

    )
}

export default App

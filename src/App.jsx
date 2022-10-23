import { useState } from 'react';
import Header from './components/Header';
import ListaGastos from './components/ListaGastos';
import Modal from './components/Modal';
import { generarFecha, generarId } from './helpers';
import IconoNewGasto from './img/nuevo-gasto.svg';

function App() {

    const [presupuesto, setPresupuesto] = useState(0);

    const [isValid, setIsValid] = useState(false);

    const [modal, setModal] = useState(false);

    const [animarModal, setAnimarModal] = useState(false);

    const [gastos, setGastos] = useState([]);

    const handleNewGasto = () => {
        setModal(true);

        setTimeout(() => {
            setAnimarModal(true);
        }, 1000);
    }

    const guardarGastos = (gasto) => {
        gasto.id = generarId();
        gasto.fecha = Date.now();
        setGastos([...gastos, gasto]);
    }

    return (
        <div>
            <Header
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValid={setIsValid}
                isValid={isValid}
            />

            {isValid && (
                <>
                    <main>
                        <ListaGastos 
                            gastos={gastos}
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
                />}

        </div>

    )
}

export default App

import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto, setPresupuesto, setIsValid, isValid}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {
            isValid ? (

            <ControlPresupuesto 
                presupuesto={presupuesto}
            />

            ) : (
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValid={setIsValid}
            />
        )}
        
    </header>
  )
}

export default Header
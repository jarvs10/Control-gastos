
const Mensaje = ({children, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>
        <p>{children}</p>
    </div>
  )
}

export default Mensaje
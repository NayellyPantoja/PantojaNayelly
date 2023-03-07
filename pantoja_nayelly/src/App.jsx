import './App.css'
import React, { useState } from 'react'
import Card from './components/Card'

function App() {

  const [user, setUser] = useState({
    nombre: '',
    peliculaFavorita: ''
})
const [show, setShow] = useState(false)
const [error, setError] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    const nombreSinEspacios = user.nombre.trim()
    if (nombreSinEspacios.length > 3 && user.peliculaFavorita.length > 6) {
      setShow(true)
      setError("")
    } else{
      setError("Por favor chequea que la información sea correcta")
    }
  }

  return (
    <div className='contenedor'>
      <form onSubmit={handleSubmit}>
        <input className= 'inputs' placeholder='Ingresa tu nombre' type="text" name="nombre" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})} />
        <input className= 'inputs' placeholder='Ingresa tu pelicula favorita' type="text" name="peliculaFavorita" value={user.peliculaFavorita} onChange={(e) => setUser({...user, peliculaFavorita: e.target.value})} />
        <button className='boton' type="submit">Enviar</button>
      </form>
      {error && <p style={{color: "red"}}>{error}</p>}
      {show  && <Card nombre={user.nombre} pelicula={user.peliculaFavorita}/>}
    </div>
  )
}

export default App

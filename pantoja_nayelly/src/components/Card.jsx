import React from 'react'

export const Card = ({nombre, pelicula}) => {
  const styles = {
    contenedor: {
      backgroundColor: "#f2f2f2",
      borderRadius: "5px",
      textAlign: "center",
      width: '500px',
      height: '300px'
    },
    h3: {
      color: "#333",
      fontSize: "24px"
    },
    p: {
      color: "#666",
      fontSize: "18px"
    },
    h1: {
      color: "white",
      backgroundColor: "#C0FF40",
      margin: "10px",
      padding: "10px",
      borderRadius: "5px",
      fontSize: "30px"
    }
  };
  return (
    <div style={styles.contenedor}>
        <h3 style={styles.h3}>¡Hola {nombre}!</h3>
        <p style={styles.p}>Sabemos que tu pelicula favorita es: </p>
        <h1 style={styles.h1}>{pelicula}</h1>
    </div>
  )
}
export default Card

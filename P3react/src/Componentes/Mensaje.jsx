import React from 'react'
import Imagen from './Imagen'

const Mensaje = (props) => {
  return (
    <div>
        <h2>Buenas Noches, {props.nombre}</h2>
        <h3>su edad: {props.edad}</h3>
        <Imagen urlimg={props.url}/>
    </div>  
  )
}

export default Mensaje
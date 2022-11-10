import React from 'react'
import { Link } from 'react-router-dom'
import { style } from './Item.Style'

const Item = ({product}) => {

  const { nombre, precio, imagen} = product //destruturando

  return (
    <div>
        <img style={style.imagen} src={imagen} alt={nombre} />
        <div>
          <h3>{nombre}</h3>
          <p>${precio}</p>
          <Link to={`/detalle/${product.id}`}>Ver Detalle</Link>
        </div>
    </div>
  )
}

export default Item
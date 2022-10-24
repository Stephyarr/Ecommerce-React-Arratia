import React from 'react'
import { Link } from 'react-router-dom'
import { style } from './Item.Style'

const Item = ({product}) => {

  const { name, precio, img} = product //destruturando

  return (
    <div>
        <img style={style.imagen} src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>${precio}</p>
          <Link to={`/detalle/${product.id}`}>Ver Detalle</Link>
        </div>
    </div>
  )
}

export default Item
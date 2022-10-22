import React from 'react'
import { Link } from 'react-router-dom'
import { style } from './Item.Style'

const Item = ({product}) => {

  const {id, name, precio, img} = product //destruturando

  return (
    <div>
        <img style={style.imagen} src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>${precio}</p>
          <Link>Ver Detalle</Link>
        </div>
    </div>
  )
}

export default Item
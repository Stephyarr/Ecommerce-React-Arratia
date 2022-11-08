import React from 'react'
import { Link } from 'react-router-dom'
import { style } from './Item.Style'
const Item = ({products}) => {

  const { imagen, name, precio, id} = products //destruturando

  return (
    <>
      <div>
          <img style={style.imagen} src={imagen} alt={name}/>

        <div>
          <h3>{name}</h3>
          <p>${precio}</p>
          <Link to={`/detalle/${id}`}>Ver Detalle</Link>
        </div>
      </div>
    </>
  )
}

export default Item
import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({products}) => {

  const { name, precio, img, stock} = products //destruturando

  return (
    <div>
      <img  src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>${precio}</p>
          <p>Stock: {stock}</p>
          <Link to='/'> Seguir Comprando </Link>
        </div>
    </div>
    )
}

export default ItemDetail
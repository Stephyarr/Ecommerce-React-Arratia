import React from 'react'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({ product }) => {
  const { removeProduct } =useCartContext();

  return (
    <div>
        <p>Titulo: {product.name}</p>
        <p>{product.quantity}</p>
        <p>{product.precio}</p>
        <p>subtotal: {product.quantity * product.precio}</p>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
    </div>
  )
}

export default ItemCart
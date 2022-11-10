import React from 'react'
import { useCartContext } from '../../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';

const ItemCart = ({ product }) => {
  const { removeProduct } =useCartContext();

  return (
    <div>
        <p>Titulo: {product.nombre}</p>
        <p>{product.quantity}</p>
        <p>{product.precio}</p>
        <p>subtotal: {product.quantity * product.precio}</p>
        {/* <button onClick={() => removeProduct(product.id)}>Eliminar</button> */}
        <button>
          <DeleteIcon onClick={() => removeProduct(product.id)}/>
        </button>
    </div>
  )
}

export default ItemCart
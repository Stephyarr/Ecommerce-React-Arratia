import React from 'react'
import { useCartContext } from '../../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';
import { style } from './ItemCart.Style';

const ItemCart = ({ product }) => {
  const { removeProduct } =useCartContext();

  return (
    <>
      <div style={style.list}>
          <div style={style.product}>
            <p style={style.descripcion}>Titulo: {product.nombre}</p>
            <p style={style.descripcion}>{product.quantity}</p>
            <p style={style.descripcion}>{product.precio}</p>
            <p style={style.descripcion}>subtotal: {product.quantity * product.precio}</p>
            
            <button style={style.botons}>
              <DeleteIcon style={style.boton} onClick={() => removeProduct(product.id)}/>
            </button>     
          </div>
          
          
      </div>
    </>
  )
}

export default ItemCart
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../context/CartContext';
const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <div>
      <ShoppingCartIcon/>
      <span>{totalProducts() || ''}</span>
    </div>
  )
}

export default CartWidget

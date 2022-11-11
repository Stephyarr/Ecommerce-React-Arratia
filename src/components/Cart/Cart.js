import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { CartFinalizar } from './CartFinalizar';
// import { ItemCount } from '../ItemCount/ItemCount';

const Cart = () => {
  const { cart } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <h4>Tu Carrito esta Vacio</h4>
        <Link to='/'>Ver Productos</Link>
      </>
    );
  }
  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      <CartFinalizar/>
    </>
  )
}

export default Cart
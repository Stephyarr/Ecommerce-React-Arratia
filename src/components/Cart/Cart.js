import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { ItemCount } from '../ItemCount/ItemCount';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

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
     <p> total: {totalPrice()}</p>
    </>
  )
}

export default Cart
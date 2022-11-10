import React, { useState, useContext } from 'react'
// import { act } from 'react-dom/test-utils';

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map(product => {
        return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
      }));
    } else {
      setCart([...cart, { ...item, quantity}]);
    }
  };

  const clearCart = () => setCart([]); //funcion para vaciar carrito

   const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
  } 
  
  const totalProducts = () => cart.reduce((acumulador, productoTotal) => acumulador + productoTotal.quantity, 0); //

  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addItem,
      totalPrice,
      totalProducts,
      cart
      }}>
      {children}
    </CartContext.Provider>
  )
}

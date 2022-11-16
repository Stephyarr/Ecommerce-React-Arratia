import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

export const CartFinalizar = () => {
    const { totalPrice, totalProducts } = useCartContext();

    return (
        <div>
            <div> 
                <p>Agregaste {totalProducts()} productos</p>
                <p> Precio Total: ${totalPrice()} </p>
                <Link to='/Form'>Finalizar Compra</Link>
            </div>
                
            <div>
                <Link to='/'>Seguir Comprando</Link>
            </div>           
        </div>
    )
}

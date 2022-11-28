import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { style } from './CartFinaliza.Style';

export const CartFinalizar = () => {
    const { totalPrice, totalProducts } = useCartContext();

    return (
        <div style={style.cart}>
            <div style={style.carts}> 
                <p>Agregaste {totalProducts()} productos</p>
                <p> Precio Total: ${totalPrice()} </p>
                <Link style={style.links} to='/'>Seguir Comprando</Link>

                <div>
                    <Link style={style.links} to='/Form'>Finalizar Compra</Link>
                </div>
            </div>
        </div>
    )
}

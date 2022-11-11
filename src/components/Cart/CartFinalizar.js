import React from 'react'
import { useCartContext } from '../../context/CartContext'
// import { Link } from 'react-router-dom';
import { Form } from '../Form/Form';

export const CartFinalizar = () => {
    const { totalPrice } = useCartContext();

    return (
        <div>
            <div> Precio Total: ${totalPrice()}</div>
            <div>
                <Form/>
            </div>           
        </div>
    )
}

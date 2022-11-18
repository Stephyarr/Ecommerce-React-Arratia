import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
// import { Link } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
// import BeatLoader  from "react-spinners/BeatLoader";
import Swal from 'sweetalert2'
 

export const Form = () => {
  
  const { cart, totalPrice, clearCart} = useCartContext()

  // const [loading, setLoading] = useState(false);
  const [orderID, setorderId] = useState();

  const [buyer, setbuyer] = useState({
    Nombre: '',
    Telefono: '',
    Email: '',
  });
  // destructurando
  const { Nombre, Telefono, Email } = buyer

  const navigate = useNavigate()

  const handlerInputChange = (e) => {
    setbuyer(({
        ...buyer,
        [e.target.name]: e.target.value
    }))
  }

  const createOrder = async(data) => {
    try {
        const col = collection(db, 'Orders')
        const order = await addDoc(col, data)
        setorderId(order.id)
        // setLoading(false)
        clearCart()
    } catch (error) {
        console.log(error)
    }
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    if (
        buyer.Nombre === '' ||
        buyer.Email === '' ||
        buyer.Telefono === '' 
      ){
      Swal.fire({
        icon: 'error',
        text: `Complete los Datos`,
      })
    }
    else{
    const items = cart.map(product => { return { id: product.id, nombre: product.nombre, precio: product.precio, cantidad: product.quantity }})
    const total = totalPrice()
    const data = { buyer, items, total}
    console.log("data", data)
    createOrder(data)
    }
  }

  const checkout = () => {
    Swal.fire({
      icon: 'success',
      title: 'Gracias por Tu Compra',
      text: `El ID de su pedido es: ${orderID}`,
      timer: 8000
    })
    setTimeout(() => {
      navigate('/')
    }, 3500)

  }

  return (
    <>
        {
          !orderID ?

            <div>
                <h4>Datos para Finalizar Compra:</h4>
                <form onSubmit={handlerSubmit}>
                    <div>
                        <label>Nombre y Apellido</label>
                        <input 
                        type="text" 
                        name="Nombre" 
                        placeholder='Nombre'
                        value={Nombre}
                        onChange={handlerInputChange}/>
                    </div>
                    <div>
                        <label>Telefono</label>
                        <input 
                        type="number" 
                        name="Telefono"
                        placeholder='Telefono'
                        value={Telefono}
                        onChange={handlerInputChange}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                        type="email" 
                        name='Email' 
                        placeholder="Email"
                        value={Email}
                        onChange={handlerInputChange}/>
                    </div>
                    <div>
                        <button type="submit">Finalizar</button>
                    </div>
                </form>
            
            </div>
            :
            <div>
              {checkout()}
            </div>
        }

        
          
    </>
    
  )
}

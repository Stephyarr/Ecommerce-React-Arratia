// import React, { useContext, useState} from 'react'
// import { useCartContext } from '../../context/CartContext'
// import { db } from '../../firebase/firebase'
// import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'
// import swal from 'sweetalert';
 

// export const Form = () => {
  
//   const { cart, totalPrice, clearCart} = useCartContext()

//   const [orderID, setorderId] = useState();

//   const [buyer, setbuyer] = useState({
//     Nombre: '',
//     Telefono: '',
//     Email: '',
//   });
//   // destructurando
//   const { Nombre, Telefono, Email } = buyer

//   const handlerInputChange = (e) => {
//     setbuyer(({
//         ...buyer,
//         [e.target.name]: e.target.value
//     }))
//   }

//   const createOrder = async(data) => {
//     try {
//         const col = collection(db, 'Orders')
//         const order = await addDoc(col, data)
//         setorderId(order.id)
//         clearCart()
//     } catch (error) {
//         console.log(error)
//     }
//   }

//   const handlerSubmit = (e) => {
//     e.preventDefault()
//     const items = cart.map(product => { return { id: product.id, nombre: product.nombre, precio: product.precio, cantidad: product.quantity }})
//     const total = totalPrice()
//     const data = { buyer, items, total}
//     console.log("data", data)
//     createOrder(data)
//   }

//   return (
//     <>
//         {
//             !orderID?
//             <div>
//                 <h4>Datos para Finalizar Compra:</h4>
//                 <form onSubmit={handlerSubmit}>
//                     <div>
//                         <label>Nombre y Apellido</label>
//                         <input 
//                         type="text" 
//                         name='nombre' 
//                         placeholder='Flavia Arratia'
//                         value={Nombre}
//                         onChange={handlerInputChange}/>
//                     </div>
//                     <div>
//                         <label>Telefono</label>
//                         <input 
//                         type="number" 
//                         name='telefono' 
//                         placeholder='Telefono'
//                         value={Telefono}
//                         onChange={handlerInputChange}/>
//                     </div>
//                     <div>
//                         <label>Email</label>
//                         <input 
//                         type="text" 
//                         name='email' 
//                         placeholder='coder@gmail.com'
//                         value={Email}
//                         onChange={handlerInputChange}/>
//                     </div>
//                     <div>
//                         <button>Finalizar Compra</button>
//                     </div>
//                 </form>
            
//             </div>
//             :
//             <div>

//             </div>
//         }
//     </>
//     //     <h4>Datos para Finalizar Compra:</h4>
//     //     <form>
//     //         <div>
//     //             <label>Nombre y Apellido</label>
//     //             <input 
//     //             type="text" 
//     //             name='nombre' 
//     //             placeholder='Flavia Arratia'
//     //             value={Nombre}
//     //             onChange={handlerInputChange}/>
//     //         </div>
//     //         <div>
//     //             <label>Telefono</label>
//     //             <input 
//     //             type="number" 
//     //             name='telefono' 
//     //             placeholder='Telefono'
//     //             value={Telefono}
//     //             onChange={handlerInputChange}/>
//     //         </div>
//     //         <div>
//     //             <label>Email</label>
//     //             <input 
//     //             type="text" 
//     //             name='email' 
//     //             placeholder='coder@gmail.com'
//     //             value={Email}
//     //             onChange={handlerInputChange}/>
//     //         </div>
//     //         <div>
//     //             <button>Finalizar Compra</button>
//     //         </div>
//     //     </form>
//     // </>
//   )
// }

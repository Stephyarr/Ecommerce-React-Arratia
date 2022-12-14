import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'
import { style } from './ItemDetail.Style'

const ItemDetail = ({item}) => {

  const [add, setAdd] = useState(false);

  const { addItem } = useCartContext();

  const { nombre, precio, imagen, stock} = item //destruturando
  
  const onAdd = (quantity) => {
    addItem(item, quantity);
    setAdd(true);
  }

  return (
    <div style={style.conDetail}>
      <img style={style.imag} src={imagen} alt={nombre} />
        <div style={style.cart}>
          <h3>{nombre}</h3>
          <p>${precio}</p>
          <p>Stock: {stock}</p>

          <div style={style.btn}> { add
              ? ( <Link to={'/Cart'} style={style.links}>Terminar Compra</Link> )
              : ( <ItemCount stock={stock} onAdd={onAdd}/> )
                }

              <div>
                <Link style={style.links} to='/'> Seguir Comprando </Link>
              </div>
          </div>
        </div>
    </div>
    )
}

export default ItemDetail
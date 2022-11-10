import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'

const ItemDetail = ({item}) => {

  const [add, setAdd] = useState(false);

  const { addItem } = useCartContext();

  const { nombre, precio, imagen, stock} = item //destruturando
  
  const onAdd = (quantity) => {
    addItem(item, quantity);
    setAdd(true);
  }

  return (
    <div>
      <img src={imagen} alt={nombre} />
        <div>
          <h3>{nombre}</h3>
          <p>${precio}</p>
          <p>Stock: {stock}</p>

          <div> { add
              ? ( <Link to={'/cart'}>Terminar Compra</Link> )
              : ( <ItemCount stock={stock} onAdd={onAdd}/> )
                }

              <div>
                <Link to='/'> Seguir Comprando </Link>
              </div>
          </div>
        </div>
    </div>
    )
}

export default ItemDetail
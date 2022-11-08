import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'

const ItemDetail = ({products}) => {

  const [add, setAdd] = useState(false);

  const { addItem } = useCartContext();

  const { name, precio, img, stock} = products //destruturando
  
  const onAdd = (quantity) => {
    addItem(products, quantity);
    setAdd(true);
    // console.log(`${quantity} unidades`);
  }

  return (
    <div>
      <img src={img} alt={name} />
        <div>
          <h3>{name}</h3>
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
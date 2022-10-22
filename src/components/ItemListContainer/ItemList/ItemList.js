import React from 'react'
import Item from '../Item/Item'
import { style } from './ItemList.Style'

const ItemList = ({productos}) => {
  return (
   <div style={style.list}>
    {productos.map((product) =>
        <Item key={product.id} product={product}/>
    )}
   </div>
  )
}

export default ItemList
import React from 'react'
import Item from '../Item/Item'
import { style } from './ItemList.Style'

const ItemList = ({productos}) => {
  return (
    <>
      <div style={style.list}>
      {productos.map(products =>
          <Item key={products.id} products={products}/>
      )}
    </div>
    </>
  
  )
}

export default ItemList
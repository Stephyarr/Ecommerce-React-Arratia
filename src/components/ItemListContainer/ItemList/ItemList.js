import React from 'react'
import Item from '../Item/Item'
import { style } from './ItemList.Style'

const ItemList = ({products}) => {
  return (
   <>
    <h2 style={style.subtitulo}> Los Productos Mas Buscados!  </h2> 
    <div style={style.list}>
      {products.map((product) =>
          <Item key={product.id} product={product}/>
      )}
    </div>
   </> 
  )
}

export default ItemList
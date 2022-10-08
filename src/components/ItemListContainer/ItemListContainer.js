import React from 'react'
import { style } from './ItemListContainer.style'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <h2 style={style.estilo}> Bienvenidos! {greeting} </h2>
      <ItemCount stock={10}/>
      {/* ItemCount a modo de prueba en ItemListContainer luego lo movemos */}
    </>
  )
}

export default ItemListContainer

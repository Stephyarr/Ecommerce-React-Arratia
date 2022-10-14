import React from 'react'
import { style } from './ItemListContainer.style'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
  function onAdd(contador) {
    console.log(`selecciono ${contador}`);
    // selecciona producto -modo ejem
  }

  return (
    <>
      <h2 style={style.estilo}> Bienvenidos! {greeting} </h2>
      <ItemCount stock={10} onAdd={onAdd}/>
      {/* ItemCount a modo de prueba en ItemListContainer luego lo movemos */}
    </>
  )
}

export default ItemListContainer

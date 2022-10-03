import React from 'react'
import { style } from './ItemListContainer.style'

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <h2 style={style.estilo}> Bienvenidos! {greeting} </h2>
    </>
  )
}

export default ItemListContainer

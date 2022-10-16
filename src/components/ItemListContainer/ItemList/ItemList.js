import React from 'react'
import { style } from './ItemList.Style'

const ItemList = (props) => {
  return (
    <div style={style.list}>
      <div >
        <img style={style.imagen} src={props.img}/>
        <div>
          <h3>{props.name}</h3>
          <p>{props.precio}</p>
        </div>
      </div>
      
    </div>
  )
}

export default ItemList
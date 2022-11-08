import React, { useState } from 'react'
import { style } from './ItemCount.Style'

export const ItemCount = ({stock, onAdd}) => {
  // declaramos estado-state
  const [contador, setContador] = useState(1);

  // eventos Add, Substract
  const handlerClickAdd = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
    // setContador(contador + 1)
    
  }
  const handlerSubstract = () => {
    if (contador > 1 ) {
      setContador(contador - 1)
    }
    // setContador(contador -1)
  
  }
  // const reset = () => {
  //   setContador(1)
  // }

  return (
    <div >
      
      <h3>Cantidad: {contador}</h3>
      <div style={style.buttons}>
        {/* evento handlerClick */}
        <button style={style.btn} onClick={handlerClickAdd}> + </button> 
        <button style={style.btn} onClick={handlerSubstract}> - </button>
        {/* <button style={style.btn} onClick={reset}>Reset</button> */}
      </div>
      <div>
        <button onClick={()=> onAdd(contador)}>Agregar al carrito</button>
      </div>
      
    </div>
  )
}

// se ejecuta el evento y luego state

 
import React, {useState, useEffect} from 'react'
import { style } from './ItemCount.Style'

export const ItemCount = ({stock, onAdd}) => {
  // declaramos estado-state
  const [contador, setContador] = useState(1);

  useEffect(()=>{
    // setTimeout(()=>{
    //   console.log("luego de 2seg");
    // },2000)

    // setInterval(()=>{
    //   console.log("ping");
    // },2000)
    //setInterval 

  },[]);

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
  const reset = () => {
    setContador(1)
  }

  return (
    <div style={style.cards}>
      <h3>Nombre Producto</h3>
      <p>Stock: {stock}</p>
      <h3>Cantidad: {contador}</h3>
      <div style={style.buttons}>
        {/* evento handlerClick */}
        <button style={style.btn} onClick={handlerClickAdd}> + </button> 
        <button style={style.btn} onClick={handlerSubstract}> - </button>
        <button style={style.btn} onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={()=> onAdd(contador)}>Agregar al carrito</button>
      </div>
      
    </div>
  )
}

// se ejecuta el evento y luego state

 
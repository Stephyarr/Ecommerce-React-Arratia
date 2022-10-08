import React, {useState} from 'react'

export const ItemCount = ({stock}) => {
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
  const reset = () => {
    setContador(1)
  }

  return (
    <div>
      <h3>Nombre Producto</h3>
      <p>Stock: {stock}</p>
      <h3>Cantidad: {contador}</h3>
      <div>
        {/* evento handlerClick */}
        <button onClick={handlerClickAdd}>sumar</button> 
        <button onClick={handlerSubstract}>restar</button>
        <button onClick={reset}>Reset</button>
        <div>
          <button>Agregar al carrito</button>
        </div>
      </div>
      
    </div>
  )
}

// se ejecuta el evento y luego state

 
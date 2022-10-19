import React, {useEffect, useState} from 'react'
import { style } from './ItemListContainer.style'
// import { ItemCount } from '../ItemCount/ItemCount'
import { ProductData } from '../../data/ProductData'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'




// PROMESA
const getProductos = ()=>{
  return new Promise((resolve) =>{
    setTimeout(()=>{
      resolve(ProductData);
    }, 2000);
  });
}
// console.log(getProductos());

const ItemListContainer = ({greeting}) => {

  const [producto, setProducto] = useState([]);

  const id  = useParams();
  // console.log(id);
  
 
  useEffect(() => {

    async function fecthData () {
      try {
        const datosFecth = await getProductos();

        const filtrado = datosFecth.filter((setProducto)=>{
          return setProducto.categoria === id
        })
        console.log(filtrado);
        // console.log(datosFecth);
        setProducto(datosFecth);
       
      } catch (error) {
        console.log(error);
      }
    }
    
    fecthData();
  }, []);
  
  

  // muestra lo que selecciono
  // function onAdd(contador) {
  //   console.log(`selecciono ${contador}`);
  
  // }
  // selecciona producto -modo ejem

  return (
    <>
        <h2 style={style.subtitulo}> Bienvenidos! {greeting} </h2> 
        {/* <h2 style={style.estilo}> Bienvenidos! {greeting} </h2> 
        <ItemCount stock={10} onAdd={onAdd}/>  */}
        {/* ItemCount a modo de prueba en ItemListContainer luego lo movemos */}

        {/* {producto.map((productos)=>
          
            <h2 key={productos.id}>{productos.name}</h2>
          )
        } */}
        <div style={style.lista}>

          {producto.map((productos)=>{
            return (
              <ItemList
                key={productos.id} 
                name={productos.name} 
                img={productos.img}
                precio={productos.precio}
              />
            )
          })}
        </div>

      
      
    </>
  )
}

export default ItemListContainer

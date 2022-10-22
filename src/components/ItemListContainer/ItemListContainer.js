import React, {useEffect, useState} from 'react'
import { style } from './ItemListContainer.style'
// import { ItemCount } from '../ItemCount/ItemCount'
import { ProductData } from '../../data/ProductData'
import ItemList from './ItemList/ItemList'
// import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);

  // const {id} =useParams();
  // console.log(id);

  useEffect(() => {
    // Promesa
    const getProductos = () => {
      return new Promise((resolve, reject)=> {
        setTimeout(()=> {
          resolve(ProductData);
          // console.log(ProductData);
        }, 2000)
      })
    }
    // getProductos()
    //   .then((datos)=> setProductos(datos));

    async function fetchProducts () {
      try {
        const datosFetch = await getProductos();
        setProductos(datosFetch);
      } catch (error) {
        console.log(error);
      }
      
    }
    fetchProducts();
    
  }, []);

  return (
    <>
        <h2 style={style.subtitulo}> Bienvenidos! {greeting} </h2> 
        <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer

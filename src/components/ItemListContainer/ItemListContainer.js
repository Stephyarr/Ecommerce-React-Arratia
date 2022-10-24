import React, {useEffect, useState} from 'react'
import { style } from './ItemListContainer.style'
// import { ItemCount } from '../ItemCount/ItemCount'
import { ProductData } from '../../data/ProductData'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);

  const { categoriaId } =useParams();
  // console.log(id);
  

  useEffect(() => {
    // Promesa
    const getProductos = new Promise(resolve => {
      setTimeout(()=> {
        resolve(ProductData)
      }, 1000);
    });
    if (categoriaId) {
      getProductos.then(res => setProductos(res.filter(producto => producto.categoria === categoriaId)));
    } else {
      getProductos.then(res => setProductos(res));
      // console.log(setProductos);
    }

  }, [categoriaId]);


    

  return (
    <>
        <h2 style={style.subtitulo}> Bienvenidos! {greeting} </h2> 
        <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer

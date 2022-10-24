import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { ProductData } from '../../data/ProductData';

const ItemDetailContainer = () => {
  
  const [products, setProducts] = useState([]);

  const { detalleId } = useParams();

  useEffect(() => {
    // Promesa
    const getProductos = new Promise(resolve => {
      setTimeout(()=> {
        resolve(ProductData)
      }, );
    });
   
    getProductos.then(res => setProducts(res.find(producto => producto.id === parseInt( detalleId ))));
  
  }, [detalleId]);

    return (
        <ItemDetail products={products}/>
      );
}

export default ItemDetailContainer
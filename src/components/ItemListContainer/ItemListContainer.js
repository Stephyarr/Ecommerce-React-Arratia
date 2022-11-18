import React, {useEffect, useState} from 'react'
import { style } from './ItemListContainer.style'
// import { ProductData } from '../../data/ProductData'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore'
import BeatLoader  from "react-spinners/BeatLoader";



const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoria } =useParams();
  
  const getData = async (categoria) => {
    try{
      const document = categoria ? query(collection(db, 'productos'), where("categoria", "==", categoria)) : collection(db, 'productos')
      const datos = await getDocs(document)
      const result = datos.docs.map((doc) => doc ={id: doc.id, ...doc.data()})
      setProducts(result)
      setLoading(false)
    }
    catch (error){
      console(error);
    }
  }

  useEffect(() => {
    getData(categoria)
  }, [categoria]);

  return (
    <>
      {
        loading?
        <BeatLoader 
          color={'#36d7b7'}
          loading={loading}
          // cssOverride={override}
          size={40}
          style={style.loading}
          // aria-label="Loading Spinner"
          // data-testid="loader"
        />
        :
        <ItemList products={products}/>
      }
    </>
  )
}

export default ItemListContainer

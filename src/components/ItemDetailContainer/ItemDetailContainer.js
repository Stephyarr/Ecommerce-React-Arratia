import React, {useEffect, useState} from 'react'
import { db } from '../../firebase/firebase'
import { getDoc, doc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
// import { ProductData } from '../../data/ProductData';
import BeatLoader  from "react-spinners/BeatLoader";


const ItemDetailContainer = () => {
  
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const seleccionarItem = async (idProduct) => {
    try{
      const document = doc(db, "productos", idProduct)
      const res = await getDoc (document)
      const result = {id: res.id, ...res.data()}
      setItem(result)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    seleccionarItem(id)
  }, [id])

  return (
    <>
      {
        loading?
        <BeatLoader 
          color={'#36d7b7'}
          loading={loading}
          // cssOverride={override}
          size={40}
            
          // aria-label="Loading Spinner"
          // data-testid="loader"
        />
        :
        <ItemDetail item={item}/>
      }
    </>
        
  );
}

export default ItemDetailContainer
import { useEffect, useState } from 'react'
import {getProducts, getProductsByIdCategory} from './../asyncMock'
import ItemList from './../components/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const [productos,setProductos] = useState([]);
const {categoryId} = useParams()

  useEffect(()=>{
const asyncFunctions = categoryId ? getProductsByIdCategory : getProducts

asyncFunctions(categoryId).then((res)=>{
   setProductos(res)
})
.catch((err)=>{
console.log(err)
})
  },[categoryId])



  return ( <> <ItemList productos={productos}/> </> )
}
export default ItemListContainer
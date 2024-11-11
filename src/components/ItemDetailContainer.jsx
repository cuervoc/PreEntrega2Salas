import { useEffect, useState } from 'react'
import {getProductsById} from './../asyncMock'
import ItemDetail from './../components/ItemDetail';
import { useParams } from 'react-router-dom';
const ItemDetailContainer = () => {
  const [producto,setProducto] = useState([]);
  const {productId}= useParams();
useEffect(() => {
  const id = parseInt(productId, 10);
  getProductsById(id).then((res)=>{
    setProducto(res)
 })
 .catch((err)=>{
 console.log(err)
 })
}, [productId])
  return (
    <>
 {producto.map((producto)=>{ 
  return <ItemDetail key={producto.id} id={producto.id} nombre={producto.name} plataforma={producto.platform} img={producto.img} precio={producto.price} resumen={producto.summary} /> 
  })}
   </>
  )
}
export default ItemDetailContainer 
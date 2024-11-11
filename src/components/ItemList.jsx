
import Producto from './../components/Item';

export const ItemList = ({productos}) => {
  return (
    <>
        <h2 className='text-center'>Lista de productos</h2>
        <div className='container'>
        <div className="row row-cols-2 row-cols-md-4 g-4 my-5">
{productos.map((producto)=>{ 
  return <Producto key={producto.id} id={producto.id} nombre={producto.name} img={producto.img} plataforma={producto.platform} precio={producto.price} resumen={producto.summary} /> 
  })}
</div>
</div>
    </>
  )
}
export default ItemList
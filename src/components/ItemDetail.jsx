

const ItemDetail = (props) => {

  return (
    <>
    <div className='container '>
      <h2 className="text-center">Informacion del juego</h2>
    <div className="card mb-3" style={{maxwidth:"540px"}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={props.img} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.plataforma}</p>
          <p className="card-text">{props.resumen}</p>
          <p className="card-text"><small className="text-body-secondary">$ {props.precio}</small></p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default ItemDetail 
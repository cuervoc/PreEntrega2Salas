import { Link } from "react-router-dom"


const Item = (props) => {
    return (
  <>
  <div className="col">
  <div className="card">
      <img src={props.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text">{props.resumen}</p>
        <p className="card-text">{props.plataforma}</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">${props.precio}</small><br />
        <Link className="btn btn-primary" to={`/product/`+props.id}>detalle</Link>
      </div>
    </div>
    </div>
    </>
    )
  }
  
  export default Item
  
  
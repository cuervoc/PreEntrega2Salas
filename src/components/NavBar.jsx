import {Link} from 'react-router-dom';

//import CardWidget from './CardWidget';
 export const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">STOREGAMES</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/PC">PC</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/Xbox">XBOX SERIES X/S</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/PS5">PS5</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/Switch">SWITCH</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar
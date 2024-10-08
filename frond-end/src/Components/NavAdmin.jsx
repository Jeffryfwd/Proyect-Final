import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importa Bootstrap JS aquí
import { Link, useNavigate  } from 'react-router-dom'
import Logo1 from '../Img/Logo1.png'
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';

function NavAdmin() {
  const navigate = useNavigate(); 
 
  const CerraSesion = ()=>{
    localStorage.removeItem('Autenticado', 'true')
    navigate('/')
  }

  return (
    <div>
          <div id="ContenNav">
      <nav  className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
         
          <Link className="navbar-brand" to="/admin">
          <div className='Logo-Nav'>
            <img src={Logo1} alt="Logo" className='LogoNav' />
            </div>
          </Link>
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"></a>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin" >Creacion de Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/edits" >Edicion de Productos</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to='/admin/usuarios'>Usuarios</Link>
              </li>
            
              <li className="nav-item">
              <button className="nav-link" onClick={CerraSesion}>Salir</button>
            </li>
              
             
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
};

export default NavAdmin
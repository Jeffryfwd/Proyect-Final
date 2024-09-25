import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap primero
import '../Styles/Inicio.css'; // Luego tus estilos personalizados

import { Link, useNavigate  } from 'react-router-dom'
import Logo1 from '../Img/Logo1.png'
import GetProducts from '../Services/GetProducts';  
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../Styles/Inicio.css'

function BarraNavegacion() {
  const navigate = useNavigate(); 
  const [productos, SetProductos]= useState([]);
 const [ListaResulta, setResult]= useState([]);
 const [datosInput, setDatosInput]= useState('')
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
useEffect(()=>{

  async function ObtenerResultados() {
    const ProductosObtenidos= await GetProducts()
   
    SetProductos(ProductosObtenidos)
   }
   ObtenerResultados();                                                           
},[])

const CerrarSesion = ()=>{
    localStorage.removeItem('Autenticado', 'true')
    navigate('/')
  }

  const Buscador = (e)=>{
    e.preventDefault();
    const ResultadosFiltrados = productos.filter(producto=>
      producto.NombreProducto.toLowerCase().includes(datosInput.toLowerCase())
    );
    setResult(ResultadosFiltrados)
    setShow(ResultadosFiltrados.length>0)
  }
  return (
    <div  className='ContenNav'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id='Nav11'>
        
      <div className="container-fluid d-flex justify-content-left align-items-center">
        <Link className="navbar-brand" to="/inicio">
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#"></Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/fertilizante">Fertilizantes</Link></li>
                <li><Link className="dropdown-item" to="/abonos">Abonos</Link></li>
                <li><Link className="dropdown-item" to="/promociones">Promociones</Link></li>
              </ul>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to='/contactos'>Contactos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quienessomos">Quienes Somos</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={CerrarSesion}>Salir</button>
            </li>
          </ul>
          <form className="d-flex" role="" onSubmit={Buscador}>
            <input
              className="form-control me-2"
              type="text"
              value={datosInput}
              onChange={(e)=> setDatosInput(e.target.value)}
              placeholder="Search"
              aria-label="Search"
              
            />
            <button className="btn btn-outline-success"  onSubmit={handleShow}>Search</button>
          </form>
        </div>
      </div>
    </nav>
   

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        {ListaResulta.length > 0 ? (
            ListaResulta.map(pr => (
              
              <div key={pr.id}>
                  {pr.ImagenProducto && (
                        <img src={pr.ImagenProducto} className="product-card-img" alt={pr.NombreProducto} />
                    )}
                <h5>{pr.NombreProducto}</h5>
                <p>{pr.Descripcion}</p>
                <p><strong>Precio:</strong> ₡{pr.Precio}</p>
              </div>
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}

</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default BarraNavegacion;

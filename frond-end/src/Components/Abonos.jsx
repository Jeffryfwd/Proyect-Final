import React, { useEffect, useState } from 'react'
import GetProducts from '../Services/GetProducts';

function Abonos() {
const [ListAbonos, setAbonos]= useState([]);

useEffect(()=>{
  
async function ObtenerAbonos() {
  const Abonos= await GetProducts();

  setAbonos(Abonos.filter((abo)=> abo.Categoria=== 'Abono'))
  
}
ObtenerAbonos()
},[])
  return (
    <div>
    <div className="container mt-4">
      <h2 className="product-list-title">Lista de Productos</h2>
      <div className="row product-list-row">
        {ListAbonos.map((Abo) => (
          <div className="col-md-4 mb-4" key={Abo.id}>
            <div className="product-card">
              {Abo.ImagenProducto && (
                <img src={Abo.ImagenProducto} className="product-card-img" alt={Abo.NombreProducto} />
              )}
              <div className="product-card-body">
                <h5 className="product-card-title">{Abo.NombreProducto}</h5>
                <p className="product-card-text">{Abo.Descripcion}</p>
                <p className="product-card-text"><strong>Precio:</strong> ₡{Abo.Precio}</p>
                <p className="product-card-text"><strong>Categoria:</strong> {Abo.Categoria}</p>
                <button className="product-card-button">Pedir Producto</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Abonos
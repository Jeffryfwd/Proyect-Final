import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import GetProducts from '../Services/GetProducts';
import '../Styles/Fertilizantes.css'
function Promociones() {
    const [ListaFertilantes, setFertilizantes]= useState([]);

    useEffect(()=>{
      async function ObtenerFertrilizantes() {
        const Fertilizantes= await GetProducts();

        setFertilizantes(Fertilizantes.filter((product) => product.Categoria=== 'Promociones'))
        
      }
        ObtenerFertrilizantes()

    },[])
  return (
    <div>
    <div className="container mt-4">
      <h2 className="product-list-title">Lista de Productos</h2>
      <div className="row product-list-row">
        {ListaFertilantes.map((fer) => (
          <div className="col-md-4 mb-4" key={fer.id}>
            <div className="product-card">
              {fer.ImagenProducto && (
                <img src={fer.ImagenProducto} className="product-card-img" alt={fer.NombreProducto} />
              )}
              <div className="product-card-body">
                <h5 className="product-card-title">{fer.NombreProducto}</h5>
                <p className="product-card-text">{fer.Descripcion}</p>
                <p className="product-card-text"><strong>Precio:</strong> ₡{fer.Precio}</p>
                <p className="product-card-text"><strong>Categoria:</strong> {fer.Categoria}</p>
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

export default Promociones
import React, { useEffect, useState } from 'react'
import PostProduct from '../Services/PostProduct'
import GetProducts from '../Services/GetProducts'

import {useNavigate} from 'react-router-dom'

function Admin() {
  const [NombreProducto, setNombre] = useState('')
  const [Descripcion, setDescripcion] = useState('')
  const [Precio, setPrecio] = useState('')
  const [Categoria, setCategoria] = useState('')
  const [ImagenProducto, setImagen] = useState('')
 

  const CargarNombre = (event) => {
    setNombre(event.target.value)
  }

  const CargarDescripcion = (event) => {
    setDescripcion(event.target.value)
  }

  const CargarPrecio = (event) => {
    setPrecio(event.target.value)
  }

  const CargarCategoria = (event) => {
    setCategoria(event.target.value)
  }

  const CargarImagen = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagen(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  }



  const Subirproduct = async (event) => {
    event.preventDefault();
    
    const EspaciosVacios= NombreProducto==='' || Descripcion==='' || Precio=== '' || Categoria==='' || ImagenProducto==='';
    if (EspaciosVacios) {
      alert('Rellene los espacios')
    }else{
      await PostProduct(NombreProducto, Descripcion, Precio, Categoria, ImagenProducto)
      alert('Producto agregado con exito')
      const TareaActualizada = await GetProducts();
      setListaProduct(TareaActualizada);
      
      setNombre('');
      setDescripcion('');
      setPrecio('');
      setCategoria('');
      setImagen('');
      
    }
  }

  return (
    <div>
      <div className="container">
        <h1 className="my-4">Crear Producto</h1>
        <form onSubmit={Subirproduct}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre del Producto</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={NombreProducto}
              onChange={CargarNombre}
              required />
          </div>

          {/* Descripción del producto */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Descripcion</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="4"
              value={Descripcion}
              onChange={CargarDescripcion}
              required
            ></textarea>
          </div>

          {/* Precio del producto */}
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Precio</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={Precio}
              onChange={CargarPrecio}
              required
            />
          </div>

          {/* Categoría del producto */}
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Categoria</label>
            <select
              className="form-select"
              id="category"
              name="category"
              value={Categoria}
              onChange={CargarCategoria}
              required
            >
              <option value="" disabled>Seleccione la categoria</option>
              <option value="Fertilizante">Fertilizantes</option>
              <option value="Abono">Abono</option>
              <option value="Herramientas">Herramienta</option>
           
            </select>
          </div>

          {/* Imagen del producto */}
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Imagen del Producto</label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              onChange={CargarImagen}
            />
          </div>

          {/* Botón de envío */}
          <button type="submit" className="btn btn-primary">Subir producto</button>
        </form>
      </div>

     
    </div>
  )
}

export default Admin

import React, { useEffect, useState } from 'react'
import PostProduct from '../Services/PostProduct'
import GetProducts from '../Services/GetProducts'
import DeleteProducts from '../Services/DeleteProducts'
import {useNavigate} from 'react-router-dom'

function Admin() {

 

  const [NombreProducto, setNombre] = useState('')
  const [Descripcion, setDescripcion] = useState('')
  const [Precio, setPrecio] = useState('')
  const [Categoria, setCategoria] = useState('')
  const [ImagenProducto, setImagen] = useState('')
  const [listaProduct, setListaProduct] = useState([])

  useEffect(() => {
    async function ObtenerProductos() {
      const Products = await GetProducts()
      setListaProduct(Products)
    }
    ObtenerProductos()
  }, [])

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

  async function EliminarProductos(id) {  
    await DeleteProducts(id)
    alert('Se ha elimanado con existo')

    const TareaActualizada= await GetProducts()

    setListaProduct(TareaActualizada)
    
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
              <option value="clothing"></option>
              <option value="home"></option>
              <option value="toys"></option>
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

      <div className="container mt-4">
        <h2>Lista de Productos</h2>
        <div className="row">
          {listaProduct.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card">
                {product.ImagenProducto && (
                  <img src={product.ImagenProducto} className="card-img-top" alt={product.NombreProducto} />
                )}
                <div className="card-body">
                  <h5 className="card-title">{product.NombreProducto}</h5>
                  <p className="card-text">{product.Descripcion}</p>
                  <p className="card-text"><strong>Precio:</strong> ${product.Precio}</p>
                  <p className="card-text"><strong>Categoria:</strong> {product.Categoria}</p>
                  <button onClick={()=>EliminarProductos(product.id)}>Eliminar</button>
                  <button>Editar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Admin

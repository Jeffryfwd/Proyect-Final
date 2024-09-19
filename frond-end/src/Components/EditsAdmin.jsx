import React, { useState, useEffect } from 'react';
import GetProducts from '../Services/GetProducts';
import DeleteProducts from '../Services/DeleteProducts';
import PutProductos from '../Services/PutProductos';


function EditsAdmin() {
  const [listaProduct, setListaProduct] = useState([]);
  const [datosModal, setModal] = useState([]);
  const [abrirModal, setAbrirModal] = useState(false);

  const InputImagen = (e) => {
    const file =  e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setModal(datosModal => ({ ...datosModal, ImagenProducto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    async function ObtenerProductos() {
      const Products = await GetProducts();
      setListaProduct(Products);
    }
    ObtenerProductos();
  }, []);

  async function EliminarProductos(id) {
    await DeleteProducts(id);
    alert('Se ha eliminado con éxito');
    const tareaActualizada = await GetProducts();
    setListaProduct(tareaActualizada);
  }

  function AbrirModal(product) {
    setModal(product);
    setAbrirModal(true);
  }

  async function EditProduct() {
    const { id, NombreProducto, Descripcion, Precio, Categoria, ImagenProducto } = datosModal;
    await PutProductos(id, NombreProducto, Descripcion, Precio, Categoria, ImagenProducto);
    const productoActualizado = await GetProducts();
    setListaProduct(productoActualizado);
    alert('Producto actualizado');
    setAbrirModal(false);
  }

  return (
    <div>
<div className="container mt-4">
    <h2 className="product-list-title">Lista de Productos</h2>
    <div className="product-list-row" >
        {listaProduct.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
                <div className="product-card" >
                    {product.ImagenProducto && (
                        <img src={product.ImagenProducto} className="product-card-img" alt={product.NombreProducto} />
                    )}
                    <div className="product-card-body">
                        <h5 className="product-card-title">{product.NombreProducto}</h5>
                        <p className="product-card-text">{product.Descripcion}</p>
                        <p className="product-card-text"><strong>Precio:</strong> ${product.Precio}</p>
                        <p className="product-card-text"><strong>Categoria:</strong> {product.Categoria}</p>
                        <button className="product-card-button" onClick={() => EliminarProductos(product.id)}>Eliminar</button>
                        <button className="product-card-button" onClick={() => AbrirModal(product)}>Editar</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

      {abrirModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">Editar Producto</h5>
                <button type="button" className="close" onClick={() => setAbrirModal(false)} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="modalNombre" className="form-label">Nombre del Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    id="modalNombre"
                    value={datosModal.NombreProducto || ''}
                    onChange={(e) => setModal({ ...datosModal, NombreProducto: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="modalDescripcion" className="form-label">Descripción</label>
                  <textarea
                    className="form-control"
                    id="modalDescripcion"
                    value={datosModal.Descripcion || ''}
                    onChange={(e) => setModal({ ...datosModal, Descripcion: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="modalPrecio" className="form-label">Precio</label>
                  <input
                    type="number"
                    className="form-control"
                    id="modalPrecio"
                    value={datosModal.Precio || ''}
                    onChange={(e) => setModal({ ...datosModal, Precio: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="modalCategoria" className="form-label">Categoría</label>
                  <input
                    type="text"
                    className="form-control"
                    id="modalCategoria"
                    value={datosModal.Categoria || ''}
                    onChange={(e) => setModal({ ...datosModal, Categoria: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="modalImagen" className="form-label">Imagen</label>
                  <input
                    type="file"
                    className="form-control"
                    id="modalImagen"
                    onChange={InputImagen}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setAbrirModal(false)}>Cerrar</button>
                <button type="button" className="btn btn-primary" onClick={EditProduct}>Guardar cambios</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditsAdmin;

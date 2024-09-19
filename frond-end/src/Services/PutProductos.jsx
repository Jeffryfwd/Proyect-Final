import React from 'react'

async function PutProductos(id,NombreProducto,Descripcion,Precio,Categoria,ImagenProducto) {
    try {
     
        const userData = { 
            NombreProducto,
            Descripcion,    
            Precio,
            Categoria,
            ImagenProducto
        
        };
        const response = await fetch("http://localhost:3000/Productos/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export default PutProductos
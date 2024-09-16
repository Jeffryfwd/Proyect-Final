import React from 'react'

async function PostProduct(NombreProducto,Descripcion,Precio,Categoria,ImagenProducto) {

    try {
     
        const userData = { 
       NombreProducto,
       Descripcion,
       Precio,
       Categoria,
       ImagenProducto
        
        };

        const response = await fetch("http://localhost:3000/Productos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }

 
}

export default PostProduct
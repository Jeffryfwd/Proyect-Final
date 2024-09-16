import React from 'react'

async function PostUsuarios(NombreUsuario,ApellidoUsuario,Correo,Contra) {
    try {
     
        const userData = { 
         NombreUsuario,
         ApellidoUsuario,
         Correo,
         Contra
        
        };

        const response = await fetch("http://localhost:3000/Usuarios", {
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

export default PostUsuarios
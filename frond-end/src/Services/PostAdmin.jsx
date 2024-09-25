import React from 'react'

async function PostAdmin(NombreAdmin, ApellidoAdmin,CorreoAdmin, ContraAdmin) {
    try {
     
        const userData = { 
         NombreAdmin,
         ApellidoAdmin,
         CorreoAdmin,
         ContraAdmin
        
        };

        const response = await fetch("http://localhost:3000/Admin", {
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

export default PostAdmin
import React from 'react'

async function DeleteProducts(id) {
    try {
        // Asegúrate de que la URL incluya el id de la tarea que quieres eliminar
        const response = await fetch(`http://localhost:3000/Productos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Verifica si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`Error deleting task with id ${id}`);
        }

        // Retorna un mensaje de éxito
        return { message: `Task with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }

 
}

export default DeleteProducts
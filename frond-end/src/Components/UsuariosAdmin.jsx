import React, { useEffect, useState } from 'react'
import GetUsuarios from '../Services/GetUsuarios'
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

function UsuariosAdmin() {
const [ListaUsuario, setListaUsuario]= useState([])

useEffect(()=>{
    async function ObtenerUsuarios() {
        const Usuarios= await GetUsuarios()

        setListaUsuario(Usuarios)

        
    }
    ObtenerUsuarios();
})

  return (
    
<div className="container mt-4">
    <h3 className="mb-4">Usuarios Registrados</h3>
    <table className="table table-striped table-bordered">
        <thead className="thead-dark">
            <tr>
                <th>ID</th>
                <th>Nombre de Usuario</th>
                <th>Apellido</th>
                <th>Correo</th>
             <th>Accion</th>
            </tr>
        </thead>
        <tbody>
            {ListaUsuario.map((usu) => (
                <tr key={usu.id}>
                    <td>{usu.id}</td>
                    <td>{usu.NombreUsuario}</td>
                    <td>{usu.ApellidoUsuario}</td>
                    <td>{usu.Correo}</td>
                    <td><button className='BotonEdit'><RiDeleteBin5Line /></button> <button className='BotonEdit' ><CiEdit /></button></td>
                   
                    
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default UsuariosAdmin
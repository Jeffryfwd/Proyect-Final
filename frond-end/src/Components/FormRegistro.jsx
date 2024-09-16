import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import PostUsuarios from '../Services/PostUsuarios';
import GetUsuarios from '../Services/GetUsuarios';
import '../Styles/Registro.css'

function FormRegistro() {
  const [NombreUsuario, setNombre] = useState('');
  const [ApellidoUsuario, setApellido] = useState('');
  const [Correo, setCorreo] = useState('');
  const [Contra, setContra] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });
  const navigate = useNavigate();

  const CargarUsua = (event) => {
    setNombre(event.target.value);
  };

  const CargarApellido = (event) => {
    setApellido(event.target.value);
  };

  const CargarCorreo = (event) => {
    setCorreo(event.target.value);
  };

  const CargarContra = (event) => {
    setContra(event.target.value);
  };

  async function BuscarUsuarios(NombreUsuario, Correo) {
    const resultado = await GetUsuarios();
    return resultado.find(
      (usu) => usu.NombreUsuario === NombreUsuario || usu.Correo === Correo
    );
  }

  const Registrar = async (event) => {
    event.preventDefault();
    const UsuariosExistentes = await BuscarUsuarios(NombreUsuario, Correo);

    if (NombreUsuario === '' || ApellidoUsuario === '' || Correo === '' || Contra === '') {
      setAlert({ show: true, message: 'Rellene los espacios', variant: 'warning' });
      return;
    }

    if (UsuariosExistentes) {
      setAlert({ show: true, message: 'Usuario Registrado anteriormente', variant: 'warning' });
      return;
    } else {
      setAlert({ show: true, message: 'Registro exitoso', variant: 'success' });
      setTimeout(() => {
        PostUsuarios(NombreUsuario, ApellidoUsuario, Correo, Contra);
        navigate('/login');
      }, 2000);
    }
  };

  return (
    <div className='contenedor'>
      <h2 className='titulo'>Registro</h2>
      <form onSubmit={Registrar} className='formulario'>
        {alert.show && (
          <Alert variant={alert.variant} onClose={() => setAlert({ ...alert, show: false })} dismissible>
            {alert.message}
          </Alert>
        )}
        <label htmlFor='Nombre' className='etiqueta'>Nombre de Usuario</label>
        <input 
          type='text'
          id='Nombre'
          name='Nombre'
          value={NombreUsuario}
          onChange={CargarUsua}
          className='input'
        />

        <label htmlFor='Apellido' className='etiqueta'>Apellidos</label>
        <input 
          type='text'
          id='Apellido'
          value={ApellidoUsuario}
          onChange={CargarApellido}
          className='input'
        />

        <label htmlFor='Correo' className='etiqueta'>Correo Electrónico</label>
        <input 
          type='email'
          id='Correo'
          value={Correo}
          onChange={CargarCorreo}
          className='input'
        />

        <label htmlFor='Contraseña' className='etiqueta'>Contraseña</label>
        <input 
          type='password'
          id='Contraseña'
          value={Contra}
          onChange={CargarContra}
          className='input'
        />

        <button type='submit' className='boton'>Registrarse</button>
      </form>
    </div>
  );
}

export default FormRegistro;

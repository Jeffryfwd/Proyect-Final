import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GetUsuarios from '../Services/GetUsuarios';
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap';

function FormLogin() {
  const [NombreUsuario, setNombre] = useState('')
  const [Contra, setContra]= useState('')
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });
  const Navigate= useNavigate();
   
  const ObtenerUsuario = ((event)=>{
    setNombre(event.target.value)

  })
  const ObtenerContra=((event)=>{
    setContra(event.target.value)
  })
  async function RevisarUsuarios() {
    const Registrados = await GetUsuarios()

    const ResultadoUsu = Registrados.find((e)=>
      e.NombreUsuario===NombreUsuario && e.Contra===Contra 
    )

   
    
    return ResultadoUsu
  }
  const IniciarSe = async (event) => {
    event.preventDefault();
    const Exito = await RevisarUsuarios()

    
 
    if (Exito) {
       localStorage.setItem('Autenticado', 'true')       
       if (Exito.Contra.includes("admin")) {
        setAlert({show:true, message:'Bienvenido Adminitrador'})
        setTimeout(() => {
          Navigate("/admin");
        },2500);
        
      } else {
        setAlert({show: true, message: 'Bienvenidos'})
       setTimeout(() => {
        Navigate("/inicio");
       }, 2500); 
        
      }
    }
    
    else{
      setAlert({ show: true, message: 'Usuario no registrado', variant: 'warning' });
    
    }
  }
  
  console.log("Nombre", NombreUsuario);
  console.log("contra", Contra);
  
  
  return (
    <div className='contenedor'>
    <h2 className='titulo'>Inicio Sesión</h2>
    <form action="" onSubmit={IniciarSe} className='formulario'>
    {alert.show && (
          <Alert variant={alert.variant} onClose={() => setAlert({ ...alert, show: false })} dismissible>
            {alert.message}
          </Alert>
        )}  
      <label htmlFor="Nombre" className='etiqueta'>Nombre de Usuario</label>
      <input 
        type="text" 
        id='Nombre'
        value={NombreUsuario}
        onChange={ObtenerUsuario}
        className='input' 
      />
      <label htmlFor="Contra" className='etiqueta'>Contraseña</label>
      <input 
        type="password" 
        id='Contra' 
        value={Contra} 
        onChange={ObtenerContra} 
        className='input' 
      />
      <button type='submit' className='boton'>Iniciar Sesión</button>
      
    </form>
    <p>Sino tienes cuenta registrate  <Link to={'/registro'}>Aqui</Link></p>
  </div>
  
  )
}

export default FormLogin
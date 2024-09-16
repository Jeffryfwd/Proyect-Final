import React from 'react'
import PInicio from '../Pages/PInicio'
import Pconsultas from '../Pages/Pconsultas';
import Pcontactos from '../Pages/Pcontactos';
import QuienesSomos from '../Components/QuienesSomos';
import Padmin from '../Pages/Padmin';
import PRegistro from '../Pages/PRegistro';
import PLogin from '../Pages/PLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function Routing() {
  return (
    <Router>
<Routes>

<Route path='/' element={<PInicio/>}></Route>
<Route path='/consultas' element={<Pconsultas/>}></Route>
<Route path='/contactos' element={<Pcontactos/>}></Route>
<Route path='/quienessomos' element={<QuienesSomos/>}></Route>
<Route path='/admin' element={<Padmin/>}></Route>
<Route path='/registro' element={<PRegistro/>}></Route>
<Route path='/login' element={<PLogin/>}></Route>

</Routes>
</Router>
  )
}

export default Routing
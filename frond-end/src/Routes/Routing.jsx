import React from 'react'
import PInicio from '../Pages/PInicio'
import Pconsultas from '../Pages/Pconsultas';
import Pcontactos from '../Pages/Pcontactos';
import QuienesSomos from '../Components/QuienesSomos';
import Padmin from '../Pages/Padmin';
import PRegistro from '../Pages/PRegistro';
import PLogin from '../Pages/PLogin';
import PeditsAdmin from '../Pages/PeditsAdmin';
import PusuariosAdmin from '../Pages/PusuariosAdmin';
import PFertilizantes from '../Pages/PFertilizantes';
import PAbonos from '../Pages/PAbonos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function Routing() {
  return (
    <Router>
<Routes>
<Route path='/login' element={<PLogin/>}></Route>
<Route path='/' element={<PInicio/>}></Route>
<Route path='/consultas' element={<Pconsultas/>}></Route>
<Route path='/contactos' element={<Pcontactos/>}></Route>
<Route path='/quienessomos' element={<QuienesSomos/>}></Route>
<Route path='/admin' element={<Padmin/>}></Route>
<Route path='/registro' element={<PRegistro/>}></Route>
<Route path='/admin/edits' element={<PeditsAdmin/>}></Route>
<Route path='/admin/usuarios' element={<PusuariosAdmin/>}></Route>
<Route path='/fertilizante' element={<PFertilizantes/>}></Route>
<Route path='/abonos' element={<PAbonos/>}></Route>

</Routes>
</Router>
  )
}

export default Routing
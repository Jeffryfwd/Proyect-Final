import React from 'react'
import PInicio from '../Pages/PInicio'
import Pconsultas from '../Pages/Pconsultas';
import Pcontactos from '../Pages/Pcontactos';
import Pquienessomos from '../Pages/Pquienessomos';
import Padmin from '../Pages/Padmin';
import PRegistro from '../Pages/PRegistro';
import PLogin from '../Pages/PLogin';
import PeditsAdmin from '../Pages/PeditsAdmin';
import PusuariosAdmin from '../Pages/PusuariosAdmin';
import PFertilizantes from '../Pages/PFertilizantes';
import PAbonos from '../Pages/PAbonos';
import ProtectedRoute from '../../ProtectRoute';
import Ppromociones from '../Pages/Ppromociones';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function Routing() {
  return (
    <Router>
<Routes>
<Route path='/' element={<PLogin/>}></Route>
<Route path='/registro' element={<PRegistro/>}></Route>
<Route path='/inicio' element={<ProtectedRoute><PInicio/></ProtectedRoute>}></Route>
<Route path='/consultas' element={<ProtectedRoute><Pconsultas/></ProtectedRoute>}></Route>
<Route path='/contactos' element={<ProtectedRoute><Pcontactos/></ProtectedRoute>}></Route>
<Route path='/quienessomos' element={<ProtectedRoute><Pquienessomos/></ProtectedRoute>}></Route>
<Route path='/fertilizante' element={<ProtectedRoute><PFertilizantes/></ProtectedRoute>}></Route>
<Route path='/abonos' element={<ProtectedRoute><PAbonos/></ProtectedRoute>}></Route>
<Route path='/promociones' element={<ProtectedRoute><Ppromociones/></ProtectedRoute>}></Route>


<Route path='/admin' element={<Padmin/>}></Route>
<Route path='/admin/edits' element={<PeditsAdmin/>}></Route>
<Route path='/admin/usuarios' element={<PusuariosAdmin/>}></Route>


</Routes>
</Router>
  )
}

export default Routing
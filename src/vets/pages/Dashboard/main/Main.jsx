import React from 'react'


import "./main.scss"

import Resumen from '../resumen/Resumen'
import { Route, Routes } from 'react-router-dom'
import { toggleOn } from '../../../../redux/slices/toggleSlice'
import { useDispatch } from 'react-redux'
import Citas from '../citas/Citas'
import Footer from '../../../components/footer/Footer'
import CitasDetail from '../citas/citas-view-detaill/CitasDetail'
import Calendario from '../calendario/Calendario'
import Mascotas from '../Mascotas/Mascotas'
import MascotasDetails from '../Mascotas/details/MascotasDetails'
import Propietarios from '../Propietarios/Propietarios'
import PropietariosDetails from '../Propietarios/details/PropietariosDetails'
import Inventory from '../Inventory/Inventory'
import InventoryDetails from '../Inventory/Details/InventoryDetails'
import Sidebar from '../../../components/sidebar/Sidebar'
import Navbars from '../../../components/navbar/Navbars'
import Desktop from '../desktop/Desktop'


function Main() {
  const dispatch = useDispatch();
  return (
    <div className='main-section'>
       <Sidebar/>

 <div
        className={`shadow-overlay d-${toggleOn ? "none" : "block"}`}
        onClick={() => {
          dispatch(toggleOn());
        }}></div>
      <div id="main" className="main">
      <Navbars />
        <Routes>
        <Route path='/resumen' element={<Resumen />} />
        <Route path='/citas' element={<Citas />} />
        <Route path='/calendario' element={<Calendario />} />
        <Route path='/citas-view' element={<CitasDetail /> }/>
      
        <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/mascotas/details" element={<MascotasDetails />} />
          <Route path="/propietarios" element={<Propietarios />} />
          <Route path="/propietarios/details" element={<PropietariosDetails />} />
          <Route path="/inventario" element={<Inventory />} />
          <Route path="/inventario/details" element={<InventoryDetails />} />
          <Route path="/desktop" element={<Desktop />} />
        
        </Routes>
        <Footer/>
      </div>


    </div>
  )
}

export default Main
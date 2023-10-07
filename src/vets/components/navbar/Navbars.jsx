import React, { useState } from 'react'
import { Badge, Button, Dropdown, Navbar } from 'react-bootstrap'
import "./navbar.scss"
import Avatars from '../avatar/Avatar'
import Notification from '../notification/Notification';
import { useNavigate } from 'react-router-dom';

function Navbars() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()
  return (
    <div className='navbars bg-white'>
         <Navbar >
       
         <p className='nav-title'>Bienvenido, Nombre de Doctor</p>
         <div className='notification-box'>
            <Button onClick={handleShow} className="notification-btn"><i className="fa-regular fa-bell"></i> <i className="fa-solid fa-chevron-down"></i><Badge bg="secondary">9</Badge></Button>
         </div>
         <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      <div className='avatar-box'>
          <Avatars/>
<div className='avatar-title-box'>
  <p className='avatar-main-title'>DR. APELLIDO</p>
  <p className='avatar-sub-title'>Veterinario</p>
</div>
<i className="fa-solid fa-chevron-down"></i>
         </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className='profile-avatar-box'>
          <Avatars/>
          <div className='profile-avatar-title-box'>
          <p className='profile-avatar-main-title'>DR. APELLIDO</p>
  <p className='profile-avatar-sub-title'>Veterinario</p>
          </div>
         
        </div>
        <Button onClick={() => {navigate("/")}} className='logout-btn'><i className="fa-solid fa-arrow-right-from-bracket"></i>  <p>Cerrar Sesión</p></Button>
      </Dropdown.Menu>
     
     
    </Dropdown>
        
       
      </Navbar>
      <Notification handleClose={handleClose} show={show} />
    </div>
  )
}

export default Navbars
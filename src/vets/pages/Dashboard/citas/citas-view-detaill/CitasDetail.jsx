import React, { useState } from 'react'
import "./citasDetail.scss"
import { ButtonGroup, Col, Collapse, Dropdown, Image, Row } from 'react-bootstrap'

import MainTab from './tabs/main/MainTab'
import { Link } from 'react-router-dom'
import CitasModal from '../modal/CitasModal'
import Alert from '../../../../components/alert/Alert'
function CitasDetail() {
  const [show, setShow] = useState(true)
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);
  const [modalShow, setModalShow] = useState(false);

  const handleHide = () => {
      setModalShow(false);
  }
  return (
    <div className='citas-detail-container'>
<div className="main-title-box">
        <p className="citas-detail-main-title">Citas agendadas</p>
        <p className="citas-detail-sub-title">Citas agendadas</p>
      </div>

      <Row  className="flex-column flex-lg-row">
          <Col lg={2} xl={3} className="w-lg-250px w-xl-350px">
            <div className="head container-sm">
            <div class="symbol symbol-100px symbol-circle mb-7">
        <Image src="../images/ava.jpg" alt="image" />
    </div>
              <p className="fs-3 text-gray-800 text-hover-primary fw-bold mb-3">Cita #12323</p>
             
               <div className='mb-9'>
                <p className="badge badge-lg badge-light-warning d-inline fs-6">Pendiente</p>
                </div>
                <div class="d-flex text-center flex-center">
       
        <div class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
            <div class="fs-4 fw-bold text-gray-700">
                <span class="w-75px">9:15 - 9:45</span>
               
 </div>
            <div class="fw-semibold text-muted ">Horario</div>
        </div>
      
        <div class="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3">
            <div class="fs-4 fw-bold text-gray-700">
                <span class="w-50px">10 Feb 2021</span>
               
  </div>
            <div class="fw-semibold text-muted ">Fecha</div>
        </div>
      
     
      
    </div>
              <div className="information">
               
              <div className="d-flex flex-stack fs-4 py-3">
                <div className="fw-bold rotate collapsible collapsed" data-bs-toggle="collapse" href="#kt_user_view_details" role="button" aria-expanded="false" aria-controls="kt_user_view_details" onClick={() => { setShow(!show) }}>
                  Details
                  <span className="ms-2 rotate-180">
                    <i className={`fa-solid fa-chevron-${show ? "up" : "down"} fs-8`}></i></span>
                </div>

                <span data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-original-title="Edit customer details" data-kt-initialized="1">
                  <Link to="#" className="btn btn-sm btn-light-primary"  >
                    Edit
                  </Link>
                </span>
              </div>
              <div className="separator"></div>
              <Collapse in={show}>
        <div id="kt_user_view_details" className="pb-5 fs-6">
          <div className="fw-bold mt-5">Mascota</div>
          <div className="text-gray-600">Hachiko</div>

          <div className="fw-bold mt-5">Propietario</div>
          <div className="text-gray-600">CAMILA ESTER CABELLO GONZALES</div>

          <div className="fw-bold mt-5">Doctor</div>
          <div className="text-gray-600">NOMBRE DE DOCTOR</div>

          <div className="fw-bold mt-5">Fecha creación</div>
          <div className="text-gray-600">10 Nov 2023, 2:40 pm</div>
        </div>
      </Collapse>
               
              </div>
            </div>
          </Col>
          <Col className="ms-lg-15">
            <div className='drop-down'>
          <Dropdown
                            as={ButtonGroup}
                           
                          >
                            <Dropdown.Toggle 
                              className='dropdown-toggle btn btn-sm  btn-flex btn-center' 
                              id="dropdown-basic"
                            >
                              Accion
                              <i
                                className='fa-solid fa-chevron-down'
                              ></i>
                            </Dropdown.Toggle>
                           
                             <Dropdown.Menu
                             className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                             
                             data-kt-menu="true"
                             data-popper-placement="bottom-end"
                           >
                            
                             <Dropdown.Item className="menu-item px-3">
                               <a onClick={handleShow}  href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">
                               Editar
                               </a>
                             </Dropdown.Item>
                             <Dropdown.Item className="menu-item px-3">
                               <a onClick={() => setModalShow(true)} href="#" className="menu-link px-3 delete" data-kt-ecommerce-product-filter="delete_row">
                               Eliminar producto
                               </a>
                             </Dropdown.Item>
                           </Dropdown.Menu>
                           
                          </Dropdown>
                          </div>
          <MainTab/>
          </Col>
        </Row>
        <Alert show={modalShow}
                    onHide={handleHide}
                    msg={"¿Seguro de completar esta operación?"} />
        <CitasModal show={open}  handleClose={handleClose} />
    </div>
  )
}

export default CitasDetail
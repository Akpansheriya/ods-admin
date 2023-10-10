import React, { useState } from "react";
import "./PropietariosDetails.scss";
import { ButtonGroup, Col, Collapse, Dropdown, Row } from "react-bootstrap";
import MainTab from "./Tabs/MainTab";
import { Link } from "react-router-dom";
import PropietariousModal from "../modal/PropietariousModal";
import Alert from "../../../../components/alert/Alert";

const PropietariosDetails = () => {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const handleHide = () => {
    setModalShow(false);
}
  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);
  return (
    <>
      <section className="propietariosdetails-section">
       
        <div className="heading">
            <p className="p-head">HACHIKO</p>
            <p>Mascotas » HACHIKO</p>
          </div>
       
        <Row className="flex-column flex-lg-row">
          <Col lg={2} xl={3} className="w-lg-250px w-xl-350px">
            <div className="head container-sm">
              <div className="img mb-7">
                <i className="bi bi-person"></i>
              </div>
                
              <p className="fs-3 text-gray-800 text-hover-primary fw-bold mb-3">Camila Ester Cabello Gonzales</p>
             
              <div className="information">
              <div className="time  text-center d-flex flex-wrap justify-content-between mb-3">
             
              <div class="border border-gray-300 border-dashed rounded py-3 px-3  ">
            <div class="fs-4 fw-bold text-gray-700">
                <span class="w-75px fs-4">25</span>

 </div>                                                                                                                               
            <div class="fw-semibold text-muted text-start fs-8">Agendadas</div>
        </div>
        <div class="border border-gray-300 border-dashed rounded py-3 px-3 ">
            <div class="fs-4 fw-bold text-gray-700">
                <span class="w-75px fs-4">20</span>

 </div>
            <div class="fw-semibold text-muted text-start fs-8">Completadas</div>
        </div>
        <div class="border border-gray-300 border-dashed rounded py-3 px-3  ">
            <div class="fs-4 fw-bold text-gray-700">
                <span class="w-75px fs-4">2</span>

 </div>
            <div class="fw-semibold text-muted text-start fs-8">Animales</div>
        </div>
      
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
          <div className="fw-bold mt-5">Doc. Identidad</div>
          <div className="text-gray-600">1234567</div>

          <div className="fw-bold mt-5">Fecha creación</div>
          <div className="text-gray-600">10 Nov 2023, 2:40 pm</div>

          <div className="fw-bold mt-5">Última Cita</div>
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
            <div className="second ">
              <MainTab />
            </div>
          </Col>
        </Row>
        <Alert show={modalShow}
                    onHide={handleHide}
                    msg={"¿Seguro de completar esta operación?"} />
        <PropietariousModal show={open} handleClose={handleClose} />
      </section>
    </>
  );
};

export default PropietariosDetails;

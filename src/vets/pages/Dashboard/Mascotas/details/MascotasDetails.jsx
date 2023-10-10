import React, { useState } from "react";
import "./mascotasDetails.scss";
import {  ButtonGroup, Col, Collapse, Dropdown, Row } from "react-bootstrap";
import MainTab from "./Tabs/MainTab";

import Alert from "../../../../components/alert/Alert";
import { Link } from "react-router-dom";
import CitasModal from "../../citas/modal/CitasModal";
import MascotasModal from "../modal/MascotasModal";

const MascotasDetails = () => {
  const [show, setShow] = useState(true);
  const [shown, setShown] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const handleCloseMascota = () => setShown(false);
  const handleShowMascota = () => setShown(true);
    const handleHide = () => {
        setModalShow(false);
    }
    const [open, setOpen] = useState(false);

    const handleCloseCitas = () => setOpen(false);
    const handleShowCitas = () => setOpen(true);
  return (
    <>
      <section className="mascotasdetails-section">
        
          <div className="heading">
            <p className="p-head">HACHIKO</p>
            <p>Mascotas » HACHIKO</p>
          </div>
         
        <Row className="flex-column flex-lg-row">
          <Col lg={2} xl={3} className="w-lg-250px w-xl-350px">
            <div className="head container-sm">
              <div className="img mb-7" >
                <i className="fa-solid fa-dog"></i>
              </div>
              <p className="fs-3 text-gray-800 text-hover-primary fw-bold mb-3">HACHIKO</p>
             
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
          <Col  className="ms-lg-15">
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
                               <a onClick={handleShowCitas}  href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">
                               Agenda cita
                               </a>
                             </Dropdown.Item>
                             <Dropdown.Item className="menu-item px-3">
                               <a onClick={handleShowMascota}  href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">
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
        <MascotasModal show={shown} handleClose={handleCloseMascota} />
        <CitasModal show={open} handleClose={handleCloseCitas} />
        <Alert show={modalShow}
                    onHide={handleHide}
                    msg={"¿Seguro de completar esta operación?"} />
      </section>
    </>
  );
};

export default MascotasDetails;

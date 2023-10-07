import React, { useState } from "react";
import "./PropietariosDetails.scss";
import { Col, Collapse, Row } from "react-bootstrap";
import MainTab from "./Tabs/MainTab";
import { Link } from "react-router-dom";

const PropietariosDetails = () => {
  const [show, setShow] = useState(true);
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
            <div className="second ">
              <MainTab />
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default PropietariosDetails;

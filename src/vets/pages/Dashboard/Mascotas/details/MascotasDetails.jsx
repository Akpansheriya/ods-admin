import React, { useState } from "react";
import "./mascotasDetails.scss";
import {  Col, Collapse, Row } from "react-bootstrap";
import MainTab from "./Tabs/MainTab";
import { Link } from "react-router-dom";

const MascotasDetails = () => {
  const [show, setShow] = useState(true);
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
            <div className="second ">
              <MainTab />
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default MascotasDetails;

import React from "react";

import { Button, ButtonGroup, Col, Dropdown, Row } from "react-bootstrap";
import "./resumen.scss";

import CitasChart from "../graph/resumen/linechart/CitasChart";
import PtientesChart from "../graph/resumen/doughnutchart/PtientesChart";

import Medicamentos from "./medicamentos/Medicamentos";
import Metricas from "./metricas/Metricas";
import ProximasCitas from "./proximas-citas/ProximasCitas";
import Column from "../graph/resumen/column/Column";

function Resumen() {
 
  return (
    <div className="resumen">
      <div className="resumen-top-container">
        <div className="main-title-box">
          <p className="resumen-main-title">Resumen</p>
          <p className="resumen-sub-title">Resumen</p>
        </div>
        <div className="calendar-box">
        <Button className="export-btn"> <i className="fa-solid fa-file-export"></i>Exportar datos</Button>
        <Dropdown
                            as={ButtonGroup}
                           
                          >
                            <Dropdown.Toggle 
                              className='dropdown-toggle btn btn-sm  btn-flex btn-center' 
                              id="dropdown-basic"
                            >
                              Mes: Febrero
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
                               <a  href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">
                              Ver detalles
                               </a>
                             </Dropdown.Item>
                             <Dropdown.Item className="menu-item px-3">
                               <a  href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">
                               Agenda cita
                               </a>
                             </Dropdown.Item>
                             <Dropdown.Item className="menu-item px-3">
                               <a   href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">
                               Editar
                               </a>
                             </Dropdown.Item>
                             <Dropdown.Item className="menu-item px-3">
                               <a  href="#" className="menu-link px-3 delete" data-kt-ecommerce-product-filter="delete_row">
                               Eliminar producto
                               </a>
                             </Dropdown.Item>
                           </Dropdown.Menu>
                           
                          </Dropdown>
            </div>
       
      </div>

      <div className="card-wrapper">
        <Metricas />
      </div>

      <div className="calendar-section">
        <Row>
          <Col sm={12} md={6} lg={6}>
          <div className="calendar-card-wrapper">
          <CitasChart />
             </div>
        
          </Col>
          <Col sm={12} md={6} lg={6}>
          <div className="calendar-card-wrapper">
          <Column />
             </div>
          </Col>
        </Row>
      </div>

      <div>
        <div className="calendar-section">
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className="calendar-card-wrapper">
                <PtientesChart />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Medicamentos />
            </Col>
          </Row>
          <div>
            <ProximasCitas />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resumen;

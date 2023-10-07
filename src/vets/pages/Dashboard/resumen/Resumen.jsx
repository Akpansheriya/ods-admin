import React from "react";

import { Button, Col, Row } from "react-bootstrap";
import "./resumen.scss";

import CitasChart from "../graph/resumen/linechart/CitasChart";
import PtientesChart from "../graph/resumen/doughnutchart/PtientesChart";

import Medicamentos from "./medicamentos/Medicamentos";
import Metricas from "./metricas/Metricas";
import ProximasCitas from "./proximas-citas/ProximasCitas";

function Resumen() {
  const openCustomDialog = () => {
    const newTab = window.open("/dialog", "_blank", "width=550,height=600");
    newTab.document.body.innerHTML = '<div id="custom-dialog-root"></div> ';
  };
  return (
    <div className="resumen">
      <div className="resumen-top-container">
        <div className="main-title-box">
          <p className="resumen-main-title">Resumen</p>
          <p className="resumen-sub-title">Resumen</p>
        </div>
        <div className="calendar-box">
              <Button  onClick={openCustomDialog} className="calendar-btn-top">
                <i className="fa-regular fa-calendar"></i>
                Ventana de Citas
              </Button>
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

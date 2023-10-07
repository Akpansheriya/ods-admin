import React from "react";
import "./detalles.scss";
import { Col, Row } from "react-bootstrap";

const Detalles = () => {
  return (
    <>
      <div className="details">
        <h4>Detalles</h4>
        <div className="info-details" lg={8}>
          <Row>
            <Col className="info-head" lg={4}>
              Nombre
            </Col>
            <Col className="info-details" lg={8}>
              Paracetamol 500mg Tableta
            </Col>
          </Row>
         
          <Row>
            <Col className="info-head" lg={4}>
              SKU
            </Col>
            <Col className="info-details" lg={8}>
              02694001
            </Col>
          </Row>
          <Row>
            <Col className="info-head" lg={4}>
              Categoría
            </Col>
            <Col className="info-details" lg={8}>
              BIENESTAR
            </Col>
          </Row>
          <Row>
            <Col className="info-head" lg={4}>
              Marca
            </Col>
            <Col className="info-details" lg={8}>
              EJEMPLO DE MARCA
            </Col>
          </Row>
          <Row>
            <Col className="info-head" lg={4}>
              Laboratorio
            </Col>
            <Col className="info-details" lg={8}>
              EJEMPLO DE LABORATORIO
            </Col>
          </Row>
          <Row>
            <Col className="info-head" lg={4}>
              Composición
            </Col>
            <Col className="info-details" lg={8}>
              Paracetamol 500mg
            </Col>
          </Row>
          <Row>
            <Col className="info-head" lg={4}>
              Descripción
            </Col>
            <Col className="info-details" lg={8}>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos Lorem Ipsum es simplemente el texto de relleno de las
              imprentas y archivos de texto.Lorem simplemente el texto de
              relleno de las imprentas y archivos de texto. Lorem Ipsum es de
              relleno de las imprentas y archivos Lorem Ipsum es simplemente el
              texto de relleno de las imprentas y archivos de texto.Lorem
              simplemente el texto de relleno de las imprentas y archivos de
              texto.
            </Col>
          </Row>
        </div>
      </div>
      <div className="details my-3">
        <h4>Actualizaciones</h4>
        <div className="detail-wrapper">
          <div className="detail-title-box">
            <p className="detail-title-main">8:00 AM</p>
            <p className="detail-title-sub">
              Cita #12323 - CUBAS TORRES, CARLOS ENRIQUE ...
            </p>
          </div>
        </div>
        <div className="detail-wrapper">
          <div className="detail-title-box">
            <p className="detail-title-main">8:00 AM</p>
            <p className="detail-title-sub">
              Cita #12323 - CUBAS TORRES, CARLOS ENRIQUE ...
            </p>
          </div>
        </div>
        <div className="detail-wrapper">
          <div className="detail-title-box">
            <p className="detail-title-main">8:00 AM</p>
            <p className="detail-title-sub">
              Cita #12323 - CUBAS TORRES, CARLOS ENRIQUE ...
            </p>
          </div>
        </div>
        <div className="detail-wrapper">
          <div className="detail-title-box">
            <p className="detail-title-main">8:00 AM</p>
            <p className="detail-title-sub">
              Cita #12323 - CUBAS TORRES, CARLOS ENRIQUE ...
            </p>
          </div>
        </div>
        <div className="detail-wrapper">
          <div className="detail-title-box">
            <p className="detail-title-main">8:00 AM</p>
            <p className="detail-title-sub">
              Cita #12323 - CUBAS TORRES, CARLOS ENRIQUE ...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalles;

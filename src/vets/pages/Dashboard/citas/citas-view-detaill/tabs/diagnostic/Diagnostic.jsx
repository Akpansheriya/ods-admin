import React from 'react'
import "./diagnostic.scss"
import { Col, Row } from 'react-bootstrap'
function Diagnostic() {
  return (
    <div className='diagnostic-container'>
         <div className="second container">
        
        <div className="details">
          <h4>Diagnóstico</h4>
          <div className="diagnos-details">
            <Row>
              <Col lg={3}>Nombre de Padecimiento</Col>
              <Col lg={9}>
                <b>Ejemplo de Nombre de Padecimiento</b>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>Descripción</Col>
              <Col lg={9}>
                <b>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos Lorem Ipsum es simplemente el texto
                  de relleno de las imprentas y archivos de texto.Lorem
                  simplemente el texto de relleno de las imprentas y
                  archivos de texto. Lorem Ipsum es de relleno de las
                  imprentas y archivos Lorem Ipsum es simplemente el texto
                  de relleno de las imprentas y archivos de texto.Lorem
                  simplemente el texto de relleno de las imprentas y
                  archivos de texto.
                </b>
              </Col>
            </Row>
          </div>
        </div>
        <div className="third container">
          <h4>Documentación</h4>
          <div className="files mb-2">
            Ejemplo de nombre de archivo.jpg
          </div>
          <div className="files">Ejemplo de nombre de archivo.pdf</div>
        </div>
        <div className="third container">
          <h4>Medicación</h4>
          <p>Medicación Recetado</p>
          <div className="files mb-2">
          <div className='files-inner'>
            Ejemplo de nombre de medicamento
            <ul>
              <li> 10 unidades</li>
              <li> 2 veces al día</li>
            </ul>
            </div>
            <i className="fa-solid fa-trash-can"></i>
            
          </div>
          <div className="files">
              <div className='files-inner'>
              Ejemplo de nombre de medicamento
            <ul>
              <li> 10 unidades</li>
              <li> 2 veces al día</li>
            </ul>
              </div>
           
              <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
        <div className="fourth container">
          <h4>Observaciones Internas</h4>
          <Row>
            <Col lg={3}>Observaciones Internas</Col>
            <Col lg={9}>
              <b>
                Lorem Ipsum es simplemente el texto de relleno de las
                imprentas y archivos Lorem Ipsum es simplemente el texto
                de relleno de las imprentas y archivos de texto.Lorem
                simplemente el texto de relleno de las imprentas y
                archivos de texto. Lorem Ipsum es de relleno de las
                imprentas y archivos Lorem Ipsum es simplemente el texto
                de relleno de las imprentas y archivos de texto.Lorem
                simplemente el texto de relleno de las imprentas y
                archivos de texto.
              </b>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <h4>Calificación del paciente</h4>
            </Col>
            <Col className="column" lg={9}>
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </Col>
          </Row>
        </div>
        <button className="printbutton">Imprimir Diagnóstico</button>
      </div>
    </div>
  )
}

export default Diagnostic
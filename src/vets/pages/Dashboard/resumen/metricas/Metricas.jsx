import React from 'react'
import {Row,Col} from 'react-bootstrap'
function Metricas() {
  return (
    <div>
         <p className="card-main-title">Métricas mes actual</p>
        <Row>
          <Col sm={12} md={3} lg={3}>
            <div className="card bg-body hoverable card-xl-stretch mb-xl-8">
              <div className="card-body">
                <div className='card-top-box'>
                  <img src='../images/cita.png' alt='citas' />
                  <div>
                    <p className="letf-main-text">Citas agendadas</p>
                    <p className="left-sub-text">150</p>
                  </div>
                </div>

                <div className="card-bottom-box">
              
                <div className="card-bottom-text-wrapper">
                  <p className="bottom-left-text">Pendientes</p>
                  <p className="bottom-right-text">30</p>
                </div>
                <hr/>
                <div  className="card-bottom-text-wrapper">
                  <p className="bottom-left-text">No asistidas</p>
                  <p className="bottom-right-text">5</p>
                </div>
                </div>

             
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} lg={3}>
          <div className="card bg-body hoverable card-xl-stretch mb-xl-8">
              <div className="card-body">
                <div className='card-top-box'>
                  <img src='../images/masco.png' alt='masco' />
                  <div>
                    <p className="letf-main-text">Mascotas</p>
                    <p className="left-sub-text">120</p>
                  </div>
                </div>

                <div className="card-bottom-box">
              
                <div className="card-bottom-text-wrapper">
                  <p className="bottom-left-text">Machos</p>
                  <p className="bottom-right-text">50</p>
                </div>
                <hr/>
                <div  className="card-bottom-text-wrapper">
                  <p className="bottom-left-text">Hembras</p>
                  <p className="bottom-right-text">70</p>
                </div>
                </div>

             
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} lg={3}>
          <div className="card bg-body hoverable card-xl-stretch mb-xl-8">
              <div className="card-body">
                <div className='card-top-box'>
                  <img src='../images/produc.png' alt='produc' />
                  <div>
                    <p className="letf-main-text">Productos</p>
                    <p className="left-sub-text">210</p>
                  </div>
                </div>

                <div className="card-bottom-box">
              
                <div className="card-bottom-text-wrapper">
                  <p className="bottom-left-text">Sin stock</p>
                  <p className="bottom-right-text">10</p>
                </div>
                <hr/>
                <div  className="card-bottom-text-wrapper">
                  <p className="bottom-left-text">Con stock</p>
                  <p className="bottom-right-text">200</p>
                </div>
                </div>

             
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} lg={3}>
          <div className="card bg-body hoverable card-xl-stretch mb-xl-8">
              <div className="card-body">
                <div className='card-top-box'>
                  <img src='../images/usua.png' alt='usua' />
                  <div>
                    <p className="letf-main-text">Usuarios</p>
                    <p className="left-sub-text">24</p>
                  </div>
                </div>

                <div className="card-bottom-box">
              
                <div className="card-bottom-text-wrapper">
                  <p className="bottom-left-text">Usuarios</p>
                  <p className="bottom-right-text">20</p>
                </div>
                <hr/>
                <div  className="card-bottom-text-wrapper">
                  <p className="bottom-left-text">Atención</p>
                  <p className="bottom-right-text">4</p>
                </div>
                </div>

             
              </div>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default Metricas
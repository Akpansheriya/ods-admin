import React from 'react'
import {Button} from "react-bootstrap"
function Medicamentos() {
  return (
    <div>
         <div className="calendar-card-wrapper-medicamentos">
                <div className="main-table-title">
                  <p>Categorías de Productos</p>
                </div>

                <table>
                  <thead>
                    <tr>
                      <th>CATEGORÍA</th>
                      <th>PRODUCTOS</th>
                      <th>F. DE CREACIÓN</th>
                      <th>OPCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BIENESTAR</td>
                      <td>123</td>
                      <td>10 Feb 2021</td>
                      <td>
                        <a
                      href="#"
                      className="btn btn-bg-light btn-active-color-primary btn-sm"
                    >
                    <i className="fa-solid fa-pen"></i>
                    </a>
                      </td>
                    </tr>
                    <tr>
                      <td>BIENESTAR</td>
                      <td>123</td>
                      <td>10 Feb 2021</td>
                      <td>
                        <a
                      href="#"
                      className="btn btn-bg-light btn-active-color-primary btn-sm"
                    >
                     <i className="fa-solid fa-pen"></i>
                    </a>
                      </td>
                    </tr>
                    <tr>
                      <td>BIENESTAR</td>
                      <td>123</td>
                      <td>10 Feb 2021</td>
                      <td>
                        <a
                      href="#"
                      className="btn btn-bg-light btn-active-color-primary btn-sm"
                    >
                      <i className="fa-solid fa-pen"></i>
                    </a>
                      </td>
                    </tr>
                    <tr>
                      <td>BIENESTAR</td>
                      <td>123</td>
                      <td>10 Feb 2021</td>
                      <td>
                      <a
                      href="#"
                      className="btn btn-bg-light btn-active-color-primary btn-sm"
                    >
                      <i className="fa-solid fa-pen"></i>
                    </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
    </div>
  )
}

export default Medicamentos
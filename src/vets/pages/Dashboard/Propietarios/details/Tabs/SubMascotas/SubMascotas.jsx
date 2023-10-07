import React from "react";
import "./submascotas.scss";
import { submascotasData } from "./submascotasData";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const SubMascotas = () => {
  return (
    <>
      <section className="submascotas-section">
        <div className="submascotas-second">
          <div className="submascotas-table-container">
            <div className="submascotas-filter-container-main">
              <div className="filter-box">
                <h1>Mascotas</h1>
              </div>
              <p className="text-gray-400 fw-bolder fs-5">121  Pacientes</p>
             
            </div>
          </div>
          <div className="submascotas-table">
            <table>
              <thead>
                <tr>
                  <th>COD.</th>
                  <th>NOMBRE</th>
                  <th>ESPECIE</th>
                  <th>SEXO</th>
                  <th>EDAD</th>
                  <th>DETALLES</th>
                </tr>
              </thead>
              <tbody>
                {submascotasData ? (
                  submascotasData.map(
                    ({ COD, NOMBRE, ESPECIE, SEXO, EDAD, DETALLES }, i) => (
                      <tr key={i}>
                        <td>{COD}</td>
                        <td>{NOMBRE}</td>
                        <td>{ESPECIE}</td>
                        <td>{SEXO}</td>
                        <td>{EDAD}</td>
                       
                        <td >
                        <Link to="/" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">{DETALLES}
                        </Link>
                      </td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td colSpan="7">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubMascotas;

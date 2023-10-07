import React from "react";
import "./vaccination.scss";
import { vaccinationData } from "./vaccinationData";
const Vaccination = () => {
  return (
    <>
      <section className="vaccination-section">
        <div className="vaccination-second">
          <div className="vaccination-table-container">
            <div className="vaccination-filter-container-main">
              <div className="filter-box">
                <h1>Vacunación</h1>
              </div>
              <div className="vaccination-record-box">
                <p>
                  <span>121 </span> Pacientes
                </p>
              </div>
            </div>
          </div>
          <div className="vaccination-table">
            <table>
              <thead>
                <tr>
                  <th>COD.</th>
                  <th>TIPO</th>
                  <th>EXPLORACIÓN</th>
                  <th>F. VACUNACIÓN</th>
                  <th>F. VALIDEZ</th>
                  <th>ESTADO</th>
                </tr>
              </thead>
              <tbody>
                {vaccinationData ? (
                  vaccinationData.map(
                    (
                      { COD, TIPO, EXPLORACIÓN, FVACUNACIÓN, FVALIDEZ, ESTADO },
                      i
                    ) => (
                      <tr key={i}>
                        <td>{COD}</td>
                        <td>{TIPO}</td>
                        <td
                          className={`${
                            EXPLORACIÓN === "APTO"
                              ? "textSuccess"
                              : "textDanger"
                          }`}>
                          {EXPLORACIÓN}
                        </td>
                        <td>{FVACUNACIÓN}</td>
                        <td>{FVALIDEZ}</td>
                        <td>
                         
                            <div
                              className={
                                ESTADO === "Vacunado"
                                  ? "badge badge-light-primary text-primary"
                                  : ESTADO === "Rechazada"
                                  ? "badge badge-light-danger text-danger"

                                  : "badge badge-light-warning text-warning "
                              }>
                            
                              <p className="status-p mb-0">{ESTADO}</p>
                            </div>
                          
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

export default Vaccination;

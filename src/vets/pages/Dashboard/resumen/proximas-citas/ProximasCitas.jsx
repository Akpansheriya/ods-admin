import React from "react";

import { proximasData } from "./data";
import { Link } from "react-router-dom";
function ProximasCitas() {
  return (
    <div className="proximas">
      <div className="proximas-top-heading">
        <p>Próximas citas agendadas</p>
      </div>
    <div className="owners-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>PROPIETARIO</th>
            <th>DIRECCIÓN</th>
            <th>TELÉFONO</th>
            <th>
              <div className="th-space">DOC. IDENTIDAD</div>
            </th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {proximasData ? (
            proximasData.map(
              (
                {
                  COD,
                  MASCOTAS,
                  VETERINARIO,
                  HORARIO,
                  FECHA,
                  ACCIONES,
                },
                i
              ) => (
                <tr key={i}>
                  <td>{COD}</td>
                  <td>{MASCOTAS}</td>
                  <td>{VETERINARIO}</td>
                  <td>{HORARIO}</td>
                  <td>{FECHA}</td>

                  <td className="text-center">
                    <Link
                      to="/dashboard/propietarios/details"
                      className="btn btn-sm btn-light btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      {ACCIONES}
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
  );
}

export default ProximasCitas;

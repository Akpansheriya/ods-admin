import React from "react";
import { Table } from "react-bootstrap";
import "./information.scss";

const Information = () => {
  return (
    <>
      <div className="details">
        <h4>Información</h4>
        <div className="info-details">
          <Table className="info-table" borderless={true}>
            <tbody>
              <tr>
                <td className="info-head">ID Mascota</td>
                <td className="info-details">#A12321</td>
              </tr>
              <tr>
                <td className="info-head">Nombre</td>
                <td className="info-details">HACHIKO</td>
              </tr>
              <tr>
                <td className="info-head">Fecha de Nacimiento</td>
                <td className="info-details">10 Nov 2020</td>
              </tr>
              <tr>
                <td className="info-head">Especie</td>
                <td className="info-details">Canino</td>
              </tr>
              <tr>
                <td className="info-head">Raza</td>
                <td className="info-details">Pastor Alemán</td>
              </tr>
              <tr>
                <td className="info-head">Sexo</td>
                <td className="info-details">MACHO</td>
              </tr>
              <tr>
                <td className="info-head">Pelo</td>
                <td className="info-details">Lacio</td>
              </tr>
              <tr>
                <td className="info-head">Color</td>
                <td className="info-details">Negro</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Information;

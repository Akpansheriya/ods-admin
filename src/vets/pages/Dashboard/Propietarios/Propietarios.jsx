import React, { useState } from "react";
import "./propietarios.scss";
import {  ButtonGroup, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import { propietariosData } from "./data";

import CitasPagination from "../../../components/pagination/citas-pagination/Citas-Pagination";
import SingleInputDateRangePicker from "../citas/date-picker/DatePicker";
const Propietarios = () => {
  const [dropdowns, setDropdown] = useState(
    new Array(propietariosData.length).fill(false)
  );
  const toggleDropdowns = (i) => {
    const updatedDropdowns = [...dropdowns];
    updatedDropdowns[i] = !updatedDropdowns[i];
    setDropdown(updatedDropdowns);
  };

  const closeDropdowns = (i) => {
    const updatedDropdowns = [...dropdowns];
    updatedDropdowns[i] = false;
    setDropdown(updatedDropdowns);
  };
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const adjustedIndexOfFirstPost = Math.max(0, indexOfFirstPost);

  const currentPosts = propietariosData.slice(adjustedIndexOfFirstPost, indexOfLastPost);
  return (
    <>
      <section className="owners-section">
      <div className="main-title-box">
          <p className="propietarios-main-title">Propietarios</p>
          <p className="propietarios-sub-title">Propietarios</p>
        </div>
        <div className="owners-second">
          <div className="owners-table-container">
            <div className="owners-filter-container-main">
              <div className="filter-box">
               
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    className="form-control mr-sm-2"
                    placeholder="Buscar cita"
                  />
                </div>
                <Dropdown
                  as={ButtonGroup}
                  show={isDropdownOpen}
                  onClose={closeDropdown}
                  onToggle={toggleDropdown}
                  align={"end"}
                  className="filter-dropdown"
                >
                  <Dropdown.Toggle
                    className={`filter-btn ${
                      isDropdownOpen === true ? "active" : ""
                    }`}
                  >
                    <i className="bi bi-funnel"></i>
                    <p>Filtros</p>{" "}
                    <i
                      className={`fa-solid fa-chevron-${
                        isDropdownOpen ? "up" : "down"
                      }`}
                    ></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className={`menu menu-sub menu-sub-dropdown w-250px w-md-300px ${
                      isDropdownOpen ? "show" : ""
                    }`}
                    data-kt-menu="true"
                    id="kt_menu_62444587ce1ee"
                  >
                    <div className="px-7 py-5">
                      <div className="fs-5 text-dark fw-bolder">
                       Filtros
                      </div>
                    </div>
                    {/* <div className="separator border-gray-200"></div> */}
                    <Dropdown.Divider className=" border-gray-200" />
                    <div>
                      <div className="px-7 py-5">
                       
                        <div className="calender">
                          <Form.Label className="fw-bold">Fecha</Form.Label>
                          <SingleInputDateRangePicker />
                        </div>
                      </div>
                      <Dropdown.Divider className=" border-gray-200" />
                      <div className="d-flex justify-content-end dropdown-btns px-7 py-5">
                        <button
                          type="reset"
                          className="btn btn-sm btn-light btn-active-light-primary me-2"
                          data-kt-menu-dismiss="true"
                        >
                          Resetear
                        </button>
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary"
                          data-kt-menu-dismiss="true"
                        >
                          Aplicar
                        </button>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="owners-record-box">
              <p className="text-gray-400 fw-bolder fs-5">121 Pacientes</p>
              </div>
            </div>
          </div>
          <div className="owners-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>PROPIETARIO</th>
                  <th>DIRECCIÓN</th>
                  <th>TELÉFONO</th>
                  <th><div  className="th-space">DOC. IDENTIDAD</div></th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts ? (
                  currentPosts.map(
                    (
                      {
                        ID,
                        PROPIETARIO,
                        DIRECCIÓN,
                        TELÉFONO,
                        DOCIDENTIDAD,
                        ACCIONES,
                      },
                      i
                    ) => (
                      <tr key={i}>
                        <td>{ID}</td>
                        <td>{PROPIETARIO}</td>
                        <td>{DIRECCIÓN}</td>
                        <td>{TELÉFONO}</td>
                        <td>{DOCIDENTIDAD}</td>
                       
                        <td className="text-end">
                        <Dropdown
                            as={ButtonGroup}
                            show={dropdowns}
                            onClose={() => closeDropdowns(i)}
                            onToggle={() => toggleDropdowns(i)}
                          >
                           <Dropdown.Toggle 
                              className={`dropdown-toggle btn btn-sm  btn-flex btn-center  ${
                                dropdowns[i] === true ? "active" : ""
                              }`}
                              id="dropdown-basic"
                            >
                              {ACCIONES}
                              <i
                                className='fa-solid fa-chevron-down'
                              ></i>
                            </Dropdown.Toggle>
                            {dropdowns[i] && (
                             <Dropdown.Menu
                             className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                             
                             data-kt-menu="true"
                             data-popper-placement="bottom-end"
                           >
                             <Dropdown.Item className="menu-item px-3">
                               <a href="#" className="menu-link px-3">
                               Ver detalles
                               </a>
                             </Dropdown.Item>
                             <Dropdown.Item className="menu-item px-3">
                               <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">
                               Editar
                               </a>
                             </Dropdown.Item>
                             <Dropdown.Item className="menu-item px-3">
                               <a href="#" className="menu-link px-3 delete" data-kt-ecommerce-product-filter="delete_row">
                               Eliminar producto
                               </a>
                             </Dropdown.Item>
                           </Dropdown.Menu>
                            )}
                          </Dropdown>
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
        <CitasPagination current={currentPage}
          total={Math.ceil(propietariosData.length / postsPerPage)}
          onPageChange={setCurrentPage} />
      </section>
    </>
  );
};

export default Propietarios;

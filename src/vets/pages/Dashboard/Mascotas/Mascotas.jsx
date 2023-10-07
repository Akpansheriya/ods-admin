import React, { useState } from "react";
import "./mascotas.scss";
import { ButtonGroup, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CitasPagination from "../../../components/pagination/citas-pagination/Citas-Pagination";
import { mascotasData } from "./data";
import SingleInputDateRangePicker from "../citas/date-picker/DatePicker";

const Mascotas = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  const [dropdowns, setDropdown] = useState(
    new Array(mascotasData.length).fill(false)
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
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const adjustedIndexOfFirstPost = Math.max(0, indexOfFirstPost);

  const currentPosts = mascotasData.slice(
    adjustedIndexOfFirstPost,
    indexOfLastPost
  );
  return (
    <>
      <section className="mascotas-section">
        <div className="main-title-box">
          <p className="mascotas-main-title">Mascotas</p>
          <p className="mascotas-sub-title">Mascotas</p>
        </div>
        <div className="mascotas-second">
          <div className="mascotas-table-container">
            <div className="mascotas-filter-container-main">
            
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    className="form-control mr-sm-2"
                    placeholder="Buscar cita"
                  />
                </div>
                <div className="card-toolbar flex-row-fluid justify-content-start gap-5">
              <div className="w-100 mw-150px position-relative">
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
                      isDropdownOpen === true ? "active-color" : ""
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
                      <div className="fs-5 text-dark fw-bolder">Filtros</div>
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
                          Aplicar{" "}
                        </button>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
          </div>
          </div>
              <div className="mascotas-record-box">
                <p className="text-gray-400 fw-bolder fs-5">121 Pacientes</p>
              </div>
            </div>
          </div>
          <div className="mascotas-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>PROPIETARIO</th>
                  <th>ESPECIE</th>
                  <th>SEXO</th>
                  <th>EDAD</th>
                  <th>CALIFICACIÓN</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts ? (
                  currentPosts.map(
                    (
                      {
                        ID,
                        NOMBRE,
                        PROPIETARIO,
                        ESPECIE,
                        SEXO,
                        EDAD,
                        star,
                        ACCIONES,
                      },
                      i
                    ) => (
                      <tr key={i}>
                        <td>{ID}</td>
                        <td>{NOMBRE}</td>
                        <td>{PROPIETARIO}</td>
                        <td>{ESPECIE}</td>
                        <td>{SEXO}</td>
                        <td>{EDAD}</td>
                        <td>
                          <div className="star-icon-wrapper">
                            <i className={star}></i> 4.5
                          </div>
                        </td>
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
        <CitasPagination
          current={currentPage}
          total={Math.ceil(mascotasData.length / postsPerPage)}
          onPageChange={setCurrentPage}
        />
      </section>
    </>
  );
};

export default Mascotas;

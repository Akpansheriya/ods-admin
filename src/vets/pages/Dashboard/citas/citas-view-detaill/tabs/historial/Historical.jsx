import React, { useState } from 'react'
import { historicalData } from './historicalData'
import "./historical.scss"
import {  Dropdown, Form, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CitasPagination from '../../../../../../components/pagination/citas-pagination/Citas-Pagination'
import SingleInputDateRangePicker from '../../../date-picker/DatePicker'
function Historical() {

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

  const currentPosts = historicalData.slice(adjustedIndexOfFirstPost, indexOfLastPost);
  
  return (
    <section className="historical-section">
        <div className="historical-second">
          <div className="historical-table-container">
            <div className="historical-filter-container-main">
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
                        <div className="mb-5 ">
                          <label className="form-label fw-bold">Estado</label>
                          <div>
                            <select
                              className="form-select form-select-solid"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_62444587ce1ee"
                              data-allow-clear="true"
                            >
                              <option>Seleccionar</option>
                              <option value="1">Completado</option>
                             
                              <option value="2">Pendiente</option>
                            </select>
                          </div>
                        </div>
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
              <p className="text-gray-400 fw-bolder fs-5">25 Citas Agendadas</p>
            </div>
          </div>
          <div className="historical-table">
            <table>
              <thead>
                <tr>
                  <th>COD.</th>
                  <th>MASCOTA</th>
                  <th>HORARIO</th>
                  <th>FECHA</th>
                  <th>ESTADO</th>
                  <th>DETALLES</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts ? (
                  currentPosts.map(
                    ({ COD, MASCOTA, HORARIO, FECHA, ESTADO, ACCIONES }, i) => (
                      <tr key={i}>
                        <td>{COD}</td>
                        <td>{MASCOTA}</td>
                        <td><div className='horario'>{HORARIO}</div></td>
                        <td><div className='fecha'>{FECHA}</div></td>
                        <td>
                          <div className="status-wrapper">
                            <div
                              className={
                                ESTADO === "Pendiente"
                                  ? "badge badge-light-warning text-warning"
                                  : "badge badge-light-success text-success"
                              }>
                            
                              <p className="status-p">{ESTADO}</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                        <a href={`/dashboard/citas-view?status=${ESTADO}`} className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">{ACCIONES}
                        </a>
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
          total={Math.ceil(historicalData.length / postsPerPage)}
          onPageChange={setCurrentPage} />
      </section>
  )
}

export default Historical
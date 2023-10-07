import React, { useState } from "react";
import "./citas.scss";
import { Button, ButtonGroup, Dropdown, Form } from "react-bootstrap";
import { citasData } from "./citasData";
import CitasPagination from "../../../components/pagination/citas-pagination/Citas-Pagination";
import { Link } from "react-router-dom";

import SingleInputDateRangePicker from "./date-picker/DatePicker";



function Citas() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [dropdowns, setDropdown] = useState(
    new Array(citasData.length).fill(false)
  );
  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
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

  const currentPosts = citasData.slice(
    adjustedIndexOfFirstPost,
    indexOfLastPost
  );
  return (
    <div className="citas">
      <div className="main-title-box">
        <p className="citas-main-title">Citas agendadas</p>
        <p className="citas-sub-title">Citas agendadas</p>
      </div>
      <div className="citas-table-container">
        <div className="card card-flush">
          <div className="card-header align-items-center py-5 ">
          <div className="header-left">
          <div className="card-title">
              <div className="d-flex align-items-center position-relative my-1">
                <span class="svg-icon svg-icon-1 position-absolute ms-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.5"
                      x="17.0365"
                      y="15.1223"
                      width="8.15546"
                      height="2"
                      rx="1"
                      transform="rotate(45 17.0365 15.1223)"
                      fill="currentColor"
                    />
                    <path
                      d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                      fill="currentColor"
                    />{" "}
                  </svg>
                </span>

                <input
                  type="text"
                  data-kt-ecommerce-product-filter="search"
                  className="form-control form-control-solid w-250px ps-14"
                  placeholder="Search Product"
                />
              </div>
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
                      <div className="fs-5 text-dark fw-bolder">Filtros</div>
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
            </div>
          </div>
          <div className="header-right">
            <Button className="export-btn"> <i className="fa-solid fa-file-export"></i> Exportar datos</Button>
            <Button  onClick={handleShow} className="new-btn">+ Nueva Cita</Button>
          </div>
           
          </div>
          <div className="card-body pt-0">
            <table
              className="table align-middle table-row-dashed fs-6 gy-5"
              id="kt_ecommerce_products_table"
            >
              <thead>
                <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                  <th className="min-w-100px">COD</th>
                  <th className="text-start min-w-200px">MASCOTA</th>
                  <th className="text-start min-w-70px">HORARIO</th>
                  <th className="text-start min-w-100px">FECHA</th>
                  <th className="text-start min-w-100px">star</th>
                  <th className="text-start min-w-100px">ESTADO</th>
                  <th className="text-end min-w-70px">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts ? (
                  currentPosts.map(
                    (
                      { COD, MASCOTA, HORARIO, FECHA, star, ESTADO, ACCIONES },
                      i
                    ) => (
                      <tr key={i}>
                        <td className="text-start pe-0">
                          <span className="fw-bold text-gray-600 fw-bolder">
                            {COD}
                          </span>
                        </td>
                        <td className="text-start pe-0">{MASCOTA}</td>

                        <td className="text-start pe-0" data-order="16">
                          {HORARIO}
                        </td>
                        <td className="text-start pe-0">
                          <div className=" fecha">{FECHA}</div>
                        </td>
                        <td className="text-start pe-0" data-order="rating-5">
                          <div className="rating justify-content-start">
                            <div className="rating-label checked">
                              {star ? (
                                star.map((el, index) => (
                                  <span
                                    className={`svg-icon svg-icon-2 ${el.star}`}
                                  >
                                    {/* <i key={index} className={el.star}></i> */}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      key={index}
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                ))
                              ) : (
                                <span>No stars</span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="text-start pe-0" data-order="estado">
                          <div
                            className={`${
                              ESTADO === "Pendiente"
                                ? "badge badge-light-warning text-warning"
                                : "badge badge-light-success text-success "
                            } `}
                          >
                            <p className="mb-0">{ESTADO}</p>
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
        <CitasModal show={show} handleClose={handleClose} />
      </div>
      <CitasPagination
        current={currentPage}
        total={Math.ceil(citasData.length / postsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Citas;

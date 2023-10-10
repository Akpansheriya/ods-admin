import React, { useState } from "react";
import "./mascotas.scss";
import { Button, ButtonGroup, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CitasPagination from "../../../components/pagination/citas-pagination/Citas-Pagination";
import { mascotasData } from "./data";
import SingleInputDateRangePicker from "../citas/date-picker/DatePicker";
import MascotasModal from "./modal/MascotasModal";
import Alert from "../../../components/alert/Alert";
import CitasModal from "../citas/modal/CitasModal";

const Mascotas = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCloseCitas = () => setOpen(false);
  const handleShowCitas = () => setOpen(true);
  const handleHide = () => {
      setModalShow(false);
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
       <div className="mascotas ">
        <div className="main-title-box">
          <p className="mascotas-main-title">Mascotas</p>
          <p className="mascotas-sub-title">Mascotas</p>
        </div>
        <div className="mascotas-table-container">
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
            <Button onClick={handleShow}  className="new-btn">+ Nueva Cita</Button>
          </div>
           
          </div>
            <div className="card-body pt-0">
              <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_products_table" >
                <thead>
                  <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                    <th className="">ID</th>
                    <th className="text-start ">NOMBRE</th>
                    <th className="text-start ">PROPIETARIO</th>
                    <th className="text-start ">ESPECIE</th>
                    <th className="text-start ">SEXO</th>
                    <th className="text-start ">EDAD</th>
                    <th className="text-start ">CALIFICACIÓN</th>
                    <th className="text-end ">ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts ? (
                    currentPosts.map(
                      (
                        { ID, NOMBRE, PROPIETARIO, ESPECIE, SEXO, EDAD, star, ACCIONES },
                        i
                      ) => (
                        <tr key={i}>
                          <td className="text-start pe-0">
                            <span className=" text-gray-600 ">{ID}</span>
                          </td>
                          <td className="text-start pe-0">


                            {NOMBRE}

                          </td>

                          <td className="text-start pe-0" data-order="16">
                            {PROPIETARIO}
                          </td>
                          <td className="text-start pe-0">
                            <div className=" fecha">{ESPECIE}</div>
                          </td>
                          <td className="text-start pe-0" data-order="estado">
                            {SEXO}
                          </td>
                          <td className="text-start pe-0" data-order="estado">
                            {EDAD}
                          </td>
                          <td className="text-start pe-0" data-order="rating-5">
                            <div class="star-icon-wrapper">
                              <i class={star}></i> 4.5</div>
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
                             <Link to='/dashboard/mascotas/details' className="menu-link px-3">
                               Ver detalles
                               </Link>
                             </Dropdown.Item>
                             <Dropdown.Item className="menu-item px-3">
                               <a onClick={handleShowCitas} href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">
                               Agendar cita
                               </a>
                             </Dropdown.Item>
                             <Dropdown.Item className="menu-item px-3">
                               <a onClick={handleShow} href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">
                               Editar
                               </a>
                             </Dropdown.Item>
                            
                             <Dropdown.Item className="menu-item px-3">
                               <a onClick={() => setModalShow(true)} href="#" className="menu-link px-3 delete" data-kt-ecommerce-product-filter="delete_row">
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
        </div>
        <CitasModal show={open} handleClose={handleCloseCitas} />
        <Alert show={modalShow}
                    onHide={handleHide}
                    msg={"¿Seguro de completar esta operación?"} />
        <MascotasModal show={show} handleClose={handleClose} />
        <CitasPagination current={currentPage}
          total={Math.ceil(mascotasData.length / postsPerPage)}
          onPageChange={setCurrentPage} />
      </div>
    </>
  );
};

export default Mascotas;

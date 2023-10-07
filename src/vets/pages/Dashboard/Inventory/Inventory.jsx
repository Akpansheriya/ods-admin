import React, { useState } from "react";
import "./inventory.scss";

import { ButtonGroup, Dropdown, Form } from "react-bootstrap";
import { inventoryData } from "./inventoryData";
import { Link } from "react-router-dom";
import CitasPagination from "../../../components/pagination/citas-pagination/Citas-Pagination";
import SingleInputDateRangePicker from "../citas/date-picker/DatePicker";

const Inventory = () => {
  const [dropdowns, setDropdown] = useState(
    new Array(inventoryData.length).fill(false)
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

  const currentPosts = inventoryData.slice(adjustedIndexOfFirstPost, indexOfLastPost);
  return (
    <>
      <section className="inventory-section">
      <div className="main-title-box">
          <p className="inventario-main-title">Inventario Productos</p>
          <p className="inventario-sub-title">Inventario Productos</p>
        </div>
        <div className="inventory-second">
          <div className="inventory-table-container">
            <div className="inventory-filter-container-main">
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
                          <label className="form-label fw-bold">Categoría</label>
                          <div>
                            <select
                              className="form-select form-select-solid"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_62444587ce1ee"
                              data-allow-clear="true"
                            >
                              <option>Seleccionar</option>
                              <option value="1">Bienestar</option>
                             
                             
                            </select>
                          </div>
                        </div>
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
                              <option value="1">Activo</option>
                             
                              <option value="2">Inactivo</option>
                            </select>
                          </div>
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
              <div className="inventory-record-box">
              <p className="text-gray-400 fw-bolder fs-5">500 Productos</p>
              </div>
            </div>
          </div>
          <div className="inventory-table">
            <table>
              <thead>
                <tr>
                  <th>SKU</th>
                  <th>PRODUCTO</th>
                  <th>PRESENTACIÓN</th>
                  <th>PRECIO</th>
                  <th>CATEGORÍA</th>
                  <th>STOCK</th>
                  <th>ESTADO</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts ? (
                  currentPosts.map(
                    (
                      {
                        SKU,
                        PRODUCTO,
                        PRESENTACIÓN,
                        PRECIO,
                        CATEGORÍA,
                        STOCK,
                        ESTADO,
                        ACCIONES,
                      },
                      i
                    ) => (
                      <tr key={i}>
                        <td>{SKU}</td>
                        <td>{PRODUCTO}</td>
                        <td>{PRESENTACIÓN}</td>
                        <td>{PRECIO}</td>
                        <td>{CATEGORÍA}</td>
                        <td>{STOCK}</td>
                        <td>
                          <div className="status-wrapper">
                            <div
                              className={
                                ESTADO === "Activo"
                                  ? "badge badge-light-primary text-primary"
                                  : "badge badge-light-danger text-danger"
                              }>
                             
                              <p className="status-p">{ESTADO}</p>
                            </div>
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
        <CitasPagination current={currentPage}
          total={Math.ceil(inventoryData.length / postsPerPage)}
          onPageChange={setCurrentPage} />
      </section>
    </>
  );
};

export default Inventory;

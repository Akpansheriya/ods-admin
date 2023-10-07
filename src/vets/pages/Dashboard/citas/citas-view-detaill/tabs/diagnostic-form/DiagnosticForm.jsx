import React, { useState } from "react";

import "./diagnosticForm.scss";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Button, Col, Form, Row } from "react-bootstrap";
import StarRating from "./StarRating";
function DiagnosticForm() {
  const [list, setList] = useState({ intake: "", Name: "one", frequency: "" });
  const [lists, setLists] = useState([]);
  const [star, setStar] = useState();
  const ratingChanged = (newRating) => {
    setStar(newRating);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setList({
      ...list,
      [name]: value,
    });
  };

  const handleAddTodo = () => {
    if (list.intake.trim() !== "") {
      setLists([...lists, list]);
      setList({ intake: "", Name: "low", frequency: "" });
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...lists];
    updatedTodos.splice(index, 1);
    setLists(updatedTodos);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "image", "code"],
    ],
  };

  return (
    <div className="diagnostic-container">
      <div className="second ">
        <Form>
          <div className="details">
            <h4>Diagnóstico de Cita</h4>
            <div className="diagnos-details">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de Padecimiento</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Nombre de Padecimiento"
                />
                <Form.Text className="text-muted">
                  Se requiere un nombre de Padecimiento del paciente.
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Descripción</Form.Label>
                <ReactQuill
                  placeholder="Type your text here..."
                  className="text-start min-h-200px"
                  modules={modules}
                  theme="snow"
                />
                <Form.Text className="text-muted">
                  Establezca una descripción para el padecimiento.
                </Form.Text>
              </Form.Group>
            </div>
          </div>
          <div className="third container upload-hide">
            <h4>Documentación</h4>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>
                <div className="file-upload-box">
                  <div className="file-upload-box-wrapper">
                    <i className="fa-solid fa-file-circle-plus"></i>
                    <div className="file-upload-text">
                      <p className="file-upload-title">
                        Suelte los archivos aquí o haga clic para cargar.
                      </p>
                      <p className="file-upload-sub-title">
                        Sube hasta 10 archivos
                      </p>
                    </div>
                  </div>
                </div>
              </Form.Label>
              <Form.Control type="file" />
              <Form.Text className="text-muted">
                Suba la documentación necesaria para registrar la cita en el
                historial del paciente.
              </Form.Text>
            </Form.Group>
          </div>
          <div className="third container">
            <h4>Medicación</h4>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nombre de Medicamento</Form.Label>
              <Form.Select
                name="Name"
                value={list.Name}
                onChange={handleInputChange}
                aria-label="Default select example"
              >
                <option>Escribe o selecciona el nombre de Medicamento</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Text className="text-muted">
                Escribir medicación para tratar el Padecimiento del paciente.
              </Form.Text>
            </Form.Group>

            <Row>
              <Col sm={12} md={6} lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Tomas de medicamento</Form.Label>
                  <Form.Control
                    type="text"
                    name="intake"
                    value={list.intake}
                    onChange={handleInputChange}
                    placeholder="Tomas de medicamento"
                  />
                  <Form.Text className="text-muted">
                    Cantidad de tomas que debe injerir del medicamento.
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col sm={12} md={6} lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Frecuencia de medicación</Form.Label>
                  <Form.Control
                    name="frequency"
                    value={list.frequency}
                    onChange={handleInputChange}
                    placeholder="Frecuencia de medicación"
                  />
                  <Form.Text className="text-muted">
                    Frecuencia en que debe injerir el medicamento.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Button onClick={handleAddTodo} className="add-list-btn">
              +Añadir Medicamento
            </Button>
            <p>Medicación Recetado</p>
            {lists
              ? lists.map((ele, ind) => (
                  <div className="files mb-2">
                    <div className="files-inner">
                      {ele.Name}
                      <ul>
                        <li>{ele.intake}</li>
                        <li>{ele.frequency}</li>
                      </ul>
                    </div>
                    <i
                      onClick={() => handleDeleteTodo(ind)}
                      className="fa-solid fa-trash-can"
                    ></i>
                  </div>
                ))
              : ""}
          </div>
          <div className="third container">
            <h4>
              Observaciones Internas{" "}
              <span className="grey-text">
                (No se imprimirá en el Diagnóstico)
              </span>
            </h4>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Observaciones Internas</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Observaciones Internas"
                rows={4}
              />
              <Form.Text className="text-muted">
                Agregar observaciones internas del paciente y/o padecimiento. Se
                guardará en el historial del paciente.
              </Form.Text>
            </Form.Group>
            <div className="calificacion-box">
              <h4>
                Calificación del paciente{" "}
                <span className="grey-text">
                  {" "}
                  (No se imprimirá en el Diagnóstico)
                </span>
              </h4>
              <div className="d-flex align-items-center justify-content-center fs-2 star-wrapper">
                <StarRating rating={star} onChange={ratingChanged} />
              </div>
            </div>
          </div>
          <div className="diagnostic-btn-group">
            <Button className="btn-imprimir">Imprimir Diagnóstico</Button>
            <Button className="btn-guardar">Guardar Diagnóstico</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default DiagnosticForm;

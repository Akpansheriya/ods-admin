import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { success } from '../../../../components/popup/Success'
import "./citasModal.scss"
function CitasModal({show,handleClose}) {
  return (
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Información de cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSelect">
                                    <Form.Label>Propietario</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Propietario</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Mascota</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Mascota</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Veterinario</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Veterinario</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicDate">
                                            <Form.Label>Fecha</Form.Label>
                                            <Form.Control type="date" placeholder="DD/MM/AAAA" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicTime">
                                            <Form.Label>Horario</Form.Label>
                                            <Form.Control type="time" placeholder="HH:MM" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Observaciones de cita</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Observaciones de cita"
                                        style={{ height: '100px' }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Cancelar
          </Button>
          <Button variant="primary" onClick={() => {handleClose(); success();}}>
          Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default CitasModal
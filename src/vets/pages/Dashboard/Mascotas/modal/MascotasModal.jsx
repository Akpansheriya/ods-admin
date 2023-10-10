import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { success } from '../../../../components/popup/Success'
function MascotasModal({show,handleClose}) {
  return (
    <div>
        <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Información de Mascota
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSelect">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control aria-label="Default" placeholder='Nombre' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Propietario</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Propietario</option>
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
                                    <Form.Label>Sexo</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Sexo</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicDate">
                                    <Form.Label>F. de Nacimiento</Form.Label>
                                    <Form.Control type="date" placeholder="DD/MM/AAAA" />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSelect">
                                    <Form.Label>Especie</Form.Label>
                                    <Form.Control aria-label="Default " placeholder='Especie' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSelect">
                                    <Form.Label>Raza</Form.Label>
                                    <Form.Control aria-label="Default" placeholder='Raza' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSelect">
                                    <Form.Label>Pelo</Form.Label>
                                    <Form.Control aria-label="Default" placeholder='Pelo' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSelect">
                                    <Form.Label>Color</Form.Label>
                                    <Form.Control placeholder='Color' aria-label="Default " />
                                </Form.Group>
                            </Col>

                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button  className='footer-btn btn btn-secondary'>Cancelar</Button>
                    <Button variant="primary" type="submit" onClick={() => {handleClose(); success();}} className='footer-btn btn btn-primary'>Guardar Cambios</Button>
                </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MascotasModal
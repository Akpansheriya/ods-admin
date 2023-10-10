import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { success } from '../../../../components/popup/Success'

function PropietariousModal({show,handleClose}) {
    
  return (
    <div>
         <Modal
    show={show}
              onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Información de Propietario
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSelect">
                                    <Form.Label>Nombres</Form.Label>
                                    <Form.Control aria-label="Default" placeholder='Nombres' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicDate">
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control type="text" placeholder="Apellidos" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSelect">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control aria-label="Default " placeholder='Teléfono' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSelect">
                                    <Form.Label>Doc. Identidad</Form.Label>
                                    <Form.Control aria-label="Default" placeholder='Doc. Identidad' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSelect">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control aria-label="Default" placeholder='Correo electrónico' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSelect">
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control placeholder='Dirección' aria-label="Default " />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Provincia</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Provincia</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Distrito</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Distrito</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} className='footer-btn btn btn-secondary'>Cancelar</Button>
                    <Button variant="primary" type="submit" onClick={() => {handleClose(); success();}} className='footer-btn btn btn-primary'>Guardar Cambios</Button>
                </Modal.Footer>
            </Modal>
    </div>
  )
}

export default PropietariousModal
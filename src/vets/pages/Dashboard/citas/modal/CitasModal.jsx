import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import "./citasModal.scss"
function CitasModal({show,handleClose}) {
  return (
    <div>
         <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSelect">
                                    <Form.Label>Producto</Form.Label>
                                    <Form.Control aria-label="Default" placeholder='Producto' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Categoría</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Categoría</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Marca</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicDate">
                                    <Form.Label>Composición</Form.Label>
                                    <Form.Control type="text" placeholder="Composición" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicSelect">
                                            <Form.Label>Stock</Form.Label>
                                            <Form.Control aria-label="Default " placeholder='Stock' />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Estado</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Estado</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSelect">
                                    <Form.Label>SKU</Form.Label>
                                    <Form.Control aria-label="Default " placeholder='SKU' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSelect">
                                    <Form.Label>Laboratorio</Form.Label>
                                    <Form.Control aria-label="Default" placeholder='Laboratorio' />
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
                                <Form.Group className="mb-3" controlId="formBasicPassword">
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
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Descripción"
                                        style={{ height: '100px' }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CitasModal
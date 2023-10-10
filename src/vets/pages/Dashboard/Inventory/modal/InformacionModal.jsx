import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { success } from '../../../../components/popup/Success';

function InformacionModal({show,handleClose}) {
 
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3 w-100" controlId="formBasicSelect">
                                    <Form.Label>Categoría</Form.Label>
                                    <Form.Control aria-label="Default" placeholder='Categoría' />
                                </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary" onClick={() => {handleClose(); success();}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default InformacionModal
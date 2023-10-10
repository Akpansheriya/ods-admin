import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';

const DeleteVerifyModal = (props) => {
    const handleFormClose = () => {
        Swal.fire({
            title: '',
            text: "Operación completada exitosamente.",
            icon: 'success',
            width: 400,
            showCancelButton: false,
            confirmButtonColor: '#336CFB',
            confirmButtonText: 'OK',
        })

    }
    return (
        <>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton >
                    <Modal.Title>Verificación de identidad</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    Por motivos de seguridad, ingresa tu contraseña actual y completaremos la operación.
                    <Form.Group className='form-group'>
                        <Form.Label>Contraseña actual</Form.Label>
                        <Form.Control placeholder='Contraseña actual' />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-secondary" onClick={() => { props.onHide() }}>
                        Cancelar
                    </Button>
                    <Button className="closebtn" onClick={() => { props.onHide(); handleFormClose() }}>
                        Continuar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteVerifyModal
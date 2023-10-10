import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import "./alert.scss"
import DeleteVerifyModal from './VerifyModal/DeleteVerifyModal'
function Alert(props) {
  const [openform, setOpenform] = useState(false)
  const handleOpenForm = () => {
    setOpenform(true)
  }

  const handleClose = () => {
    setOpenform(false)
  }
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body >
          <i class="bi bi-question-circle"></i>
          <p>{props.msg}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="closebtn" onClick={() => { props.onHide(); handleOpenForm() }}>
            Si
          </Button>
          <Button className="btn-cancel btn-secondary" onClick={props.onHide}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
      <DeleteVerifyModal show={openform} onHide={handleClose} />

    </>
  )
}

export default Alert
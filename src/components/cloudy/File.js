import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"
//import { useAuth } from "../../contexts/AuthContext"
//import { storage, database } from "../../firebase"


export default function File({ file }) {
  const [open, setOpen] = useState(false)
  //const res = await database.collection('files').doc(file.name).delete()
  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <>
    <Button onClick={openModal}
      target="blank"
      className="btn btn-outline-light text-truncate w-100"
    >
      <FontAwesomeIcon icon={faFile} className="mr-2" />
      {file.name}
    </Button>
    <Modal show={open} onHide={closeModal}>
        <Form>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Options</Form.Label>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" target="blank" href={file.url}>
              Open
            </Button>
            <Button variant="dark" type="submit" >
              Download
            </Button>
            <Button variant="dark" type="submit" >
              Delete
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      </>
  )
}
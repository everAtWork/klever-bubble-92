import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

function CreateTypeModal({show, onHide}) {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (    
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!
                  <Form>
                      <Form.Control placeholder={"Enter the name of the type"}>

                      </Form.Control>
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Add New Type
                </Button>
              </Modal.Footer>
            </Modal>
        );
}

export default CreateTypeModal

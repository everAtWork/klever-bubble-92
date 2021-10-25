import React from 'react'
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap'
import { Context } from '../..';
import { useState } from 'react';

function CreateProductModal({show, onHide}) {
    const {product} = useContext(Context)
    const [info, setInfo] = useState([])
    const [show, setShow] = useState(false);
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter((i) => i.number !== number))
    }


        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (    
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!
                  <Form>
                      <Dropdown className="mt-3 mb-3">
                          <Dropdown.Toggle>
                              Choose the type
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                              {product.types.map(() => {
                                  <Dropdown.Item key={type.id}>
                                      {type.name}
                                  </Dropdown.Item>
                              })}
                          </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown className="mt-3 mb-3">
                          <Dropdown.Toggle>
                              Choose the brand
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                              {product.brands.map(() => {
                                  <Dropdown.Item key={brand.id}>
                                      {brand.name}
                                  </Dropdown.Item>
                              })}
                          </Dropdown.Menu>
                      </Dropdown>
                      <Form.Control className="mt-3" placeholder="Product title goes here">
                      </Form.Control>
                      <Form.Control className="mt-3" placeholder="Product price goes here" type="number">
                      </Form.Control>
                      <Form.Control className="mt-3" type="file">
                      </Form.Control>
                      <hr></hr>
                      <Button variant={"outline-dark"}>Add New Product</Button>
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button onClick={addInfo} variant="primary" onClick={handleClose}>
                  Add New Type
                </Button>
                {
                    info.map((i) => 
                    <Row className="mt-4" key={i.number}>
                        <Col md={4}>
                        <Form.Control placeholder={"Property title goes here"}>

                        </Form.Control>
                        </Col>
                        <Col md={4}>
                        <Form.Control placeholder={"Property description goes here"}>

                        </Form.Control>
                        </Col>
                        <Col md={4}>
                            <Button onClick={() => removeInfo(i.number)} variant={"outline-danger"}>
                                Delete Property
                            </Button>
                        </Col>
                    </Row>)
                }
              </Modal.Footer>
            </Modal>
        );
}

export default CreateProductModal

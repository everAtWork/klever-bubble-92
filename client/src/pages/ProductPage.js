import React from 'react'
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
import productController from '../../../server/controllers/productController';

const ProductPage = () => {
    const description = [
        {id:1, title: 'RAM', description: '5 GB'},
        {id:2, title: 'Handycam', description: '12 mPix'},
        {id:3, title: 'Processor', description: 'Intel 347'},
        {id:4, title: 'Accumulator', description: '4800'},
        {id:5, title: 'Cooller', description: '42'},
    ]
    return (
        <Container className="d-flex flex-column align-items-center">
            <Row>
            <Col md={4}>
                <Image width={400} height={300} src={product.img}></Image>
            </Col>
            <Col md={4}>
                <h2>
                {product.name}
                </h2>
                <div className="d-flex align-items-center justify-content-center">{product.rating}</div>
            </Col>
            <Col md={4}>
                <Card className="d-flex flex-column align-items-cetner justify-content-around"
                style={{width: 300, height: 300, fontSize: 32, border:"5px solid lightgray"}}>
                    <h3>starting at ${product.price}</h3>
                    <Button variant={"outline-dark"}>Add 2 Cart</Button>
                </Card>
            </Col>  
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>Product details</h2>
                {description.map((info, index) => {
                    <Row key={info.id}
                    style={{background: index % 2 === 0 ? 'lightgray' : 'transparent'}}>
                        {info.title} : {info.description}
                    </Row>
                } )}
            </Row>
        </Container>
    )
}
export default ProductPage;
import React from 'react'
import { Col, Card, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../utils/constantae'

const ProductItem = ({product}) => {
    const history = useHistory() 
    return (
        <Col md={3} onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)} >
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={product.img}></Image>
                <div>
                    <div>...Samsoonk</div>
                    <div>
                        <div>SZTAR RATUNG</div>
                    </div>
                </div>
                <div>{product.name}</div>
            </Card>
        </Col>
    )
}

export default ProductItem

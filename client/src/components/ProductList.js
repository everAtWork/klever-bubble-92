import React from 'react'
import { observer } from 'mobx-react-lite'
import { Row } from 'react-bootstrap'
import ProductItem from './ProductItem'

const ProductList = observer(() => {
    const {product} = useContext(Context) 
    return (
        <Row className="d-flex">
            {product.products.map((product) => <ProductItem key={prod.id} product={product}></ProductItem>)}
        </Row>
    )
})

export default ProductList

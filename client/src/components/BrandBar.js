import React from 'react'
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Row, Card } from 'react-bootstrap';

const BrandBar = observer(() => {
    const {product} = useContext(Context) 
    return (
        <Row>
            {product.brands.map(() => { <Card
            border={brand.id === product.selectedBrand.id ? 'danger' : 'light'}
            onClick={() => product.setSelectedBrand(brand)} key={brand.id}>brand.name</Card>})}
        </Row>
    )
})

export default BrandBar;
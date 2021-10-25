import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { ListGroup } from 'react-bootstrap'
import ProductStore from '../store/ProductStore'

const TypeBar = observer(() => {
    const {product} = useContext(Context)
    return (
    <ListGroup>
        {product.types.map((type) => <ListGroup.Item active={type.id === product.selectedType.id} onClick={() => product.setSelectedType(type)}  key={type.id}>{type.name}</ListGroup.Item> ) }
    </ListGroup>
        )
})

export default TypeBar

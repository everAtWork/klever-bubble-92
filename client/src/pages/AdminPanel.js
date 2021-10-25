import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import CreateTypeModal from '../components/modals/CreateTypeModal'
import CreateProductModal from '../components/modals/CreateProductModal'
import CreateBrandModal from '../components/modals/CreateBrandModal'

export default function AdminP() {
    const [typeVisible, setTypeVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
        return (
        <Container className="d-flex flex-column">
            <Button onclick={setTypeVisible(true)} className="mt-4 p-4" variant={"outline-dark"}>+type</Button>
            <Button onclick={setBrandVisible(true)} className="mt-4 p-4" variant={"outline-dark"}>+brand</Button>
            <Button onclick={setProductVisible(true)} className="mt-4 p-4" variant={"outline-dark"}>+product</Button>
            <CreateTypeModal onHide={() => setTypeVisible(false)} show={typeVisible}></CreateTypeModal>
            <CreateBrandModal onHide={() => setBrandVisible(false)} show={brandVisible}></CreateBrandModal>
            <CreateProductModal onHide={() => setProductVisible(false)} show={productVisible}></CreateProductModal>
        </Container>
    )
}

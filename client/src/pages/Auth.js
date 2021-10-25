import React from 'react'
import {Container, Card, Form, Button, Row} from 'react-bootstrap'
import { NavLink, useHistory} from 'react-router-dom'
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/constantae'
import { useState } from 'react'

export default function Auth() {
    const curLoc = useHistory()
    const isLogin = curLoc.pathname === LOGIN_ROUTE

        const clickageAuth = async () => {
                if (isLogin) {
                    const responze = await login()
                } else {
                    const responze = await registration(eml, pasw)
                }

        }

                const [pasw, setPasw] = useState('')
                const [eml, setEml] = useState('')
        
    return (
        <Container className="d-flex justify-center align-items-center">
            <Card>
                <h2>{isLogin ? "AUTHORIZATION" : "REGISTRATION"}</h2>
                <Form>
                    <Form.Control value={eml} onChange={e => setEml(e.target.value)} type="email" placeholder="Enter your email">

                    </Form.Control>
                    <Form.Control value={pasw} onChange={e => setPasw(e.target.value)} type="password" placeholder="Enter your password">

                    </Form.Control>
                    <Row className="d-flex justify-content-between">
                        {isLogin ? <div className="noacc-sugg">not registered yet? <NavLink to={REGISTRATION_ROUTE}>sign up!</NavLink></div> :
                        <div className="login-sugg">registered already?<NavLink to={LOGIN_ROUTE}>log in using your account!</NavLink></div> }
                    <Button onClick={clickageAuth} variant={"outline-success"}>{isLogin ? 'enter' : 'sign up'}</Button>
                    </Row>
                </Form>
            </Card>

        </Container>
    )
}

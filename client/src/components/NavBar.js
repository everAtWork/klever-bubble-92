import React from 'react'
import { Context } from '../index'
import {Navbar, Button, Container} from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/constantae'
import { observer } from "mobx-react-lite" 

const NavBar = observer(() => {
    const history = useHistory()
    const {user} = useContext(Context)
    return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Nav className="me-auto">
          <NavLink to={SHOP_ROUTE}>buyFromUs</NavLink>
        { user.isAuth ? <Nav className="ml-auto">
            <Button onClick={() => history.push(ADMIN_ROUTE)}>ADM PNL</Button>
            <Button onClick={() => history.push(LOGIN_ROUTE)}>LOG OUT</Button>
        </Nav> : 
            <Nav className="ml-auto">
            <Button onClick={() => user.setIsAuth(true)}>LOG IN</Button>
        </Nav>
        }
      </Nav>
      </Container>
    </Navbar>
    )
})

export default NavBar

import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/constantae'
import {Context} from "../index"

const AppRouter = () => {
    const {user} = useContext(Context)
}
export default function AppRouter() {
    const isAuth = false
    return (
    <Switch>
        {user.isAuth && 
            authRoutes.map(({path, Component}) =>{
                <Route key={path} path={path} component={Component} exact></Route>
            })
        }
        {
            publicRoutes.map(({path, Component}) =>{
                <Route key={path} path={path} component={Component} exact></Route>
            })
        }
        <Redirect to={SHOP_ROUTE}/>
    </Switch>
        )
}
 
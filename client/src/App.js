import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '.';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loaderTime, setLoaderTime] = useState(true)

  useEffect(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoaderTime(false))
    }, [])

    if (loading) {
      return <Spinner animation={"border"}></Spinner>
    }


  return (  
  <BrowserRouter>
        <NavBar/>
       <AppRouter/>  
  </BrowserRouter>
    );
})

export default App;

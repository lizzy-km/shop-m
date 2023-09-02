
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import './App.css'
import React from 'react'
import Home from './Pages/Home'
import { useSelector } from 'react-redux'
import Login from './Auth/Login'
import { isAuthSelector } from './RTK/Services/AuthSlice'

const App = ()=> {

  const isAuth = useSelector(isAuthSelector);
 

  return (
    <BrowserRouter>
      <Routes>
        {
          !isAuth && <>
                        <Route exact path='/' element={<Home/>} />
                    </>
        }{
          isAuth &&   <Route exact path='/' element={ <Login/> } />

        }
        
      </Routes>
      
  </BrowserRouter>
  )
}

export default App

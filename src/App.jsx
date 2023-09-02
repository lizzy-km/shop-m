
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import './App.css'
import GuestRoute from './Path/GuestRoute'
import PrivateRoute from './Path/PrivateRoute'
import Login from './Auth/Login'
import Home from './Pages/Home'

function App() {

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact children={<Home />} />

      <GuestRoute path="/login" children={
      <Login />
      } />
      <PrivateRoute path="/home" children={

      <Home />
      
      } />
    </Switch>
  </BrowserRouter>
  )
}

export default App


import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../RTK/Services/AuthSlice";
import Home from "../Pages/Home";
import Cookies from "js-cookie";

const GuestRoute =()=>{
  // const isAuth = useSelector(isAuthSelector);
  const navigate = useNavigate();
  const isAuth = Cookies.get('User')

  if (isAuth !== null) {
    navigate('/')
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/> } />
        </Routes>
    </BrowserRouter>
  )
}

export default GuestRoute;

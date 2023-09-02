
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../RTK/Services/AuthSlice";
import Home from "../Pages/Home";

const GuestRoute =()=>{
  const isAuth = useSelector(isAuthSelector);
  const navigate = useNavigate();

  if (isAuth) {
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

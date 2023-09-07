import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Login from "./Auth/Login";
import { Box, Flex } from "@chakra-ui/react";
import NavBar from "./Common/Header/NavBar";
import Cart from "./Pages/Cart/Cart";
import Function from "./Function";

const App = () => {



  const {isAuth} = Function()
  const {is} = isAuth()



 
  return (
    <Flex w={"100%"}  overflow={'hidden'} flexDirection={"column"}>
      <NavBar  />

      <Box>
        <BrowserRouter>
          <Routes>
            {is && (
              <>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cart" element={ <Cart/> } />
              </>
            )}
            {!is && <Route exact path="/" element={<Login />} />}
          </Routes>
        </BrowserRouter>
      </Box>
    </Flex>
  );
};

export default App;

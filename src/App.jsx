import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Login from "./Auth/Login";
import { Box, Flex } from "@chakra-ui/react";
import Cookies from "js-cookie";
import NavBar from "./Common/Header/NavBar";

const App = () => {
  const isAuth = Cookies.get("User");

  return (
    <Flex w={"100%"} justify={"flex-start"} flexDirection={"column"}>
      <NavBar />

      <Box>
        <BrowserRouter>
          <Routes>
            {isAuth && (
              <>
                <Route exact path="/" element={<Home />} />
              </>
            )}
            {!isAuth && <Route exact path="/" element={<Login />} />}
          </Routes>
        </BrowserRouter>
      </Box>
    </Flex>
  );
};

export default App;

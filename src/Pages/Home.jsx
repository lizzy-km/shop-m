import React from "react";
import App from "../Components/ProductCard/App";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex flexDirection={'column'} >
      <Flex h={'00px'} >

      </Flex>

      <Flex>
        <Flex w={"20%"}></Flex>
        <Flex w={"80%"}>
          <App />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;

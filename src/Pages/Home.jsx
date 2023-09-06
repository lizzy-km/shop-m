import React, { useState } from "react";
import App from "../Components/ProductCard/App";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import Category from "../Components/Categories/Category";
import Top from "../Common/Header/Top";

const Home = () => {
  const [isLargerThan840] = useMediaQuery('(min-width: 840px)')
  const[load,setLoad] = useState(false)


  return (
    <Flex 
    marginTop={'80px'} 
    overflowY={'scroll'} 
    h={'screen'} 
    maxH={'screen'} 
    flexDirection={'column'}
    px={'5'}
     >
      
      <Flex 
      rounded={'xl'}
      bg={'gray.400'} 
      
      h={'100px'} >
        {/* <Top/> */}
      </Flex>

      {
        isLargerThan840 ? (
          <Flex 
          py={'4'}
          
           >
            <Flex w={"20%"}>
              <Category load={load} setLoad={setLoad} />
            </Flex>
            <Flex w={"80%"}>
              <App load={load} setLoad={setLoad} />
            </Flex>
          </Flex>
        ):(
          <Flex 
          py={'4'}
            flexDirection={'column'}
          
           >
            <Flex w={"100%"}>
              <Category load={load} setLoad={setLoad}/>
            </Flex>
            <Flex w={"100%"}>
              <App load={load} setLoad={setLoad} />
            </Flex>
          </Flex>
        )
      }

      
    </Flex>
  );
};

export default Home;

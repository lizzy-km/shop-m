import React, { useState } from "react";
import App from "../Components/ProductCard/App";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import Category from "../Components/Categories/Category";
import Fav from "../Components/Fav/Fav";

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
    p={'5'}
     >
      
      <Flex 
      rounded={'xl'}
      shadow={'0px 0px 8px #121212'}
      h={'auto'} >
        <Fav/>
      </Flex>

      {
        isLargerThan840 ? (
          <Flex 
          py={'6'}
          flexDirection={'column'}

          
           >
            <Flex w={"100%"}>
              <Category load={load} setLoad={setLoad} />
            </Flex>
            <Flex w={"100%"}>
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

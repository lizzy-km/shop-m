import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'

const Quantum = () => {

    var setDistanceOfBox = 45;
    let setHeightOfBox = 70 ;

    

    
    const bounce =()=>{
        

    }

    const sphere =  <Box
    position={'absolute'}
    bottom={`${setHeightOfBox}%`}
    left={`${setDistanceOfBox}%`}
    style={{
        boxShadow:'inset -8px -4px 12px 4px #1f1f1f'
    }}
    bg={'gray.50'}
    p={'8'}
    rounded={'full'}
    />  


    const height = innerHeight/10
    const width = innerWidth

  





  return (
    <Flex
        cursor={'pointer'}
        onClick={bounce}
        position={'relative'}
        w={'100%'}
        h={'100vh'}
        justify={'center'}
        alignItems={'center'}
    >
       {sphere}

      <Box
      w={width}
      h={height}
      bottom={0}
      bg={'blackAlpha.700'}
      position={'absolute'}
      textAlign={'center'}
      >
        Earth
      </Box>
    </Flex>
  )
}

export default Quantum

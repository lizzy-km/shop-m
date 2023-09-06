import React, { useEffect } from 'react'
import { useGetCategoriesQuery } from '../../RTK/API/FakeAuth';
import { Box, Button, ButtonGroup, Flex, Image,  Text,  useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import data from '../ProductCard/data';
import Cookies from 'js-cookie';


const CategoryList = ({load,setLoad}) => {
    const CatD = useGetCategoriesQuery()
    const Cat = CatD?.data?.filter(item => item?.image !== 'https://placeimg.com/640/480/any')
    const [isLargerThan840] = useMediaQuery('(min-width: 840px)')
    const { setName,name } = data()
   

    useEffect(()=>{
        Cookies.set('CatName',name)
        setLoad(!load)
    },[name])

    // console.log(name);

   
  return (
    <>{
        isLargerThan840 ? (
            <Flex 
            roundedBottom={{
                base:'base',
                md:'md',
                lg:'lg',
                xl:'xl'
            }}
            shadow={'0px 3px 8px #121212'}

            maxH={'400px'}
            overflowY={'scroll'}
            flexDirection={'column'}
            gap={'4'}
    
             >
                <Flex 
                px={'8'}
                py={'4'}
    
                flexDirection={'column'}
                gap={'4'}
                 >
                {
                    Cat?.map(data => {
                        return(
                            <Button id={data?.name} onClick={()=> setName(data?.name)}
                            key={data?.id}
                            display={'flex'}
                            justifyContent={'space-between'}
                            maxW={'100%'}
                            minW={'100%'}
                             > 
                            <Text> {data?.name} </Text>
                            <Image 
                            w={'30px'}
                            h={'30px'} 
     
                            rounded={'md'}
                            src={data?.image} />
                            </Button>
    
                        )
                    })
                }
                </Flex>
               
            </Flex>
        ):(
            <Flex 
            bg={useColorModeValue('gray.400', 'blackAlpha.800')}            alignItems={'center'}
            rounded={{
                base:'base',
                md:'md',
                lg:'lg',
                xl:'xl'
            }}

            h={'60px'}
            overflowX={'scroll'}
            overflowY={'hidden'}
            gap={'4'}
            p={'3'}
    
             >
                <Flex 
                // px={'8'}
                py={'4'}
    
                flexDirection={'row'}
                gap={'4'}
                 >
                {
                    Cat?.map(data => {
                        return(
                            <Button id={data?.name} onClick={()=> setName(data?.name)}
                            display={'flex'}
                            justifyContent={'space-between'}
                            maxW={'15%'}
                            minW={'15%'}
                             > 
                            <Text> {data?.name} </Text>
                            <Image 
                            w={'30px'}
                            h={'30px'} 
     
                            rounded={'md'}
                            src={data?.image} />
                            </Button>
    
                        )
                    })
                }
                </Flex>
               
            </Flex>
        )
    }</>
  )
}

export default CategoryList
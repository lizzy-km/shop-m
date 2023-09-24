import React from 'react'
import { useGetCategoriesQuery } from '../../RTK/API/FakeAuth'
import { Box, Flex,   Skeleton,   Text,  useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import CategoryList from './CategoryList';
import Cookies from 'js-cookie';

const Category = ({load,setLoad}) => {
    const {data,isLoading} = useGetCategoriesQuery()
    const [isLargerThan840] = useMediaQuery('(min-width: 840px)')

    const CategoryName = Cookies?.get('CatName')
    

  return (
    <Flex 
    // bg={useColorModeValue('gray.500', 'blackAlpha.800')}
    position={'relative'}
    flexDirection={'column'}
    // h={'400px'}
    pb={'6'}
    w={'100%'}
    rounded={{
        base:'base',
        md:'md',
        lg:'lg',
        xl:'xl'
    }}
     >
        {
            isLargerThan840 &&
             <Box 
             display={'flex'}
             gap={'4'}
            p={'4'}
            w={'100%'}
            // shadow={'0px -3px 8px #121212'}
    
            roundedTop={{
                base:'base',
                md:'md',
                lg:'lg',
                xl:'xl'
            }}
            // bg={useColorModeValue('gray.500', 'blackAlpha.800')}
            color={useColorModeValue('white', 'gray.200')}
             >
                <Flex
                gap={'0'}

                >
                <Text
                bg={'blackAlpha.800'}
                p={'2'}
                roundedLeft={'lg'}
                >
                   <pre>Category</pre> 
                </Text>
                <Text
                color={'blue.900'} 
                bg={'gray.400'}
                p={'2'}
                roundedRight={'lg'}
                 > { CategoryName ? CategoryName : 'All'} </Text>
                </Flex>
                
            </Box>
        }
        
        {
            isLoading ? (
                <Skeleton roundedBottom={'xl'} h={'400px'} >

                </Skeleton>

            ):(
                <CategoryList load={load} setLoad={setLoad} />

            )
        }
       
    </Flex>
  )
}

export default Category
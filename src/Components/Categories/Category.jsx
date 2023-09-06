import React from 'react'
import { useGetCategoriesQuery } from '../../RTK/API/FakeAuth'
import { Box, Flex,   Skeleton,   Text,  useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import CategoryList from './CategoryList';

const Category = ({load,setLoad}) => {
    const {data,isLoading} = useGetCategoriesQuery()
    const [isLargerThan840] = useMediaQuery('(min-width: 840px)')


    

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
            isLargerThan840 && <Box 
            p={'4'}
            w={'100%'}
            shadow={'0px -3px 8px #121212'}
    
            roundedTop={{
                base:'base',
                md:'md',
                lg:'lg',
                xl:'xl'
            }}
            bg={useColorModeValue('gray.500', 'blackAlpha.800')}
            color={useColorModeValue('white', 'gray.200')}
             >
                <Text>
                    Category
                </Text>
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
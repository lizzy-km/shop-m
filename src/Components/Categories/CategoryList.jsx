import React, { useEffect } from 'react'
import { useGetCategoriesQuery } from '../../RTK/API/FakeAuth';
import { Box, Button, ButtonGroup, Flex, Image,  Skeleton,  Tab,  TabList,  Tabs,  Text,  useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import data from '../ProductCard/data';
import Cookies from 'js-cookie';


const CategoryList = ({load,setLoad}) => {

    const CatData = useGetCategoriesQuery()
    const Cat = CatData?.data?.
                    filter(item => item?.image !== 'https://placeimg.com/640/480/any').
                    filter(item => item?.name !== '  ').
                    filter(item => item?.name !== 'Animals').filter(item => item?.name !== 'dummy')
                
    const [isLargerThan840] = useMediaQuery('(min-width: 840px)')
    const { setName,name } = data()
   
    useEffect(()=>{
        Cookies.set('CatName',name)
        setLoad(!load)
    },[name])

    // console.log(name);

   const active =(e)=>{
    e.target.bg ='blue.200'
   }
  return (
    <>{
        isLargerThan840 ? (
            <Tabs 
            colorScheme='blue'
            display={'flex'}
            justifyContent={'center'}
            w={'100%'}

            // bg={useColorModeValue('gray.400', 'blackAlpha.800')}   
            alignItems={'center'}
            roundedBottom={{
                base:'base',
                md:'md',
                lg:'lg',
                xl:'xl'
            }}

            h={'auto'}
            gap={'4'}
            flexWrap={'wrap'}
            p={'3'}
    
             >
                <TabList 
                // px={'8'}
                py={'4'}
                display={'flex'}
                flexDirection={'row'}
                flexWrap={'wrap'}
                gap={'4'}
                
            justifyContent={'flex-start'}
            w={'100%'}
                 >
                    <Tab 
                    _hover={{
                            bg:'blackAlpha.800'
                        }} 
                       
                        id={''} 
                        onClick={()=> setName('')}
                            key={''}
                            display={'flex'}
                            flexDirection={'column'}
                            justifyContent={'space-between'}
                            maxW={'150px'}
                            minW={'150px'}
                            rounded={{
                                base:'base',
                                md:'md',
                                lg:'lg',
                                xl:'xl'
                            }}
                             > 
                              <Image 
                            
                            bg={'blackAlpha.800'}
                            roundedTop={'lg'}
                            w={'100%'}
                            h={'83%'}
                            objectFit={'cover'}
     
                            src={'https://i.pinimg.com/564x/cd/12/b6/cd12b6abe71866fd0d989ba932ec2f94.jpg'} />
                            <Text
                             color={'blue.900'} 
                             bg={'gray.400'}
                             w={'100%'}
                             roundedBottom={'lg'}
                            > All </Text>
                            
                            </Tab>
                {
                    Cat?.map(data => {
                        return(
                            <Tab 
                            _hover={{
                                bg:'blackAlpha.800'
                            }}
                            id={data?.name} onClick={()=> setName(data?.name)}
                            display={'flex'}
                            flexDirection={'column-reverse'}
                            justifyContent={'space-between'}
                            maxW={'150px'}
                            minW={'150px'}
                            maxH={'150px'}
                            minH={'150px'}
                           
                            rounded={{
                                base:'base',
                                md:'md',
                                lg:'lg',
                                xl:'xl'
                            }}
                             > 

                            <Text
                            color={'blue.900'} 
                            bg={'gray.400'}
                            w={'100%'}
                            roundedBottom={'lg'}
                            > {data?.name} </Text>

                            <Image 
                            fallback={<Skeleton
                                roundedTop={'lg'}
                                w={'100%'}
                                maxH={'83%'}
                            />}
                            bg={'blackAlpha.800'}
                            roundedTop={'lg'}
                            w={'100%'}
                            maxH={'80%'}
                            minH={'80%'}

                            objectFit={'cover'}
     
                            src={data?.image} />
                            </Tab>
    
                        )
                    })
                }
                </TabList>
               
            </Tabs>
        ):(
            <Tabs colorScheme='blue'
            display={'flex'}

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
                <TabList 
                // px={'8'}
                py={'4'}
                display={'flex'}
                flexDirection={'row'}
                gap={'4'}
                 >
                    <Tab _hover={{
                            bg:'blackAlpha.400'
                        }} 
                       
                        id={''} onClick={()=> setName('')}
                            key={''}
                            display={'flex'}
                            justifyContent={'space-between'}
                            maxW={'10%'}
                            minW={'5%'}
                            rounded={{
                                base:'base',
                                md:'md',
                                lg:'lg',
                                xl:'xl'
                            }}
                             > 
                            <Text> All </Text>
                            
                            </Tab>
                {
                    Cat?.map(data => {
                        return(
                            <Tab id={data?.name} onClick={()=> setName(data?.name)}
                            display={'flex'}
                            justifyContent={'space-between'}
                            maxW={'15%'}
                            minW={'5%'}
                            rounded={{
                                base:'base',
                                md:'md',
                                lg:'lg',
                                xl:'xl'
                            }}
                             > 
                            <Text> {data?.name} </Text>
                            
                            </Tab>
    
                        )
                    })
                }
                </TabList>
               
            </Tabs>
        )
    }</>
  )
}

export default CategoryList
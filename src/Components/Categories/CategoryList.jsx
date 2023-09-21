import React, { useEffect } from 'react'
import { useGetCategoriesQuery } from '../../RTK/API/FakeAuth';
import { Box, Button, ButtonGroup, Flex, Image,  Tab,  TabList,  Tabs,  Text,  useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import data from '../ProductCard/data';
import Cookies from 'js-cookie';


const CategoryList = ({load,setLoad}) => {
    const CatD = useGetCategoriesQuery()
    const Cat = CatD?.data?.filter(item => item?.image !== 'https://placeimg.com/640/480/any').filter(item => item?.name !== '  ').filter(item => item?.name !== 'Animals').filter(item => item?.name !== 'Animals')
   
    const [isLargerThan840] = useMediaQuery('(min-width: 840px)')
    const { setName,name } = data()
   
    // console.log(Cat);
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
            // <Tabs  colorScheme='blue'
            // roundedBottom={{
            //     base:'base',
            //     md:'md',
            //     lg:'lg',
            //     xl:'xl'
            // }}
            // shadow={'0px 3px 8px #121212'}

            // maxH={'400px'}
            // overflowY={'scroll'}
            // flexDirection={'column'}
            // gap={'4'}
    
            //  >
            //     <TabList 
            //     px={'8'}
            //     py={'4'}
    
            //     flexDirection={'column'}
            //     gap={'4'}
            //      >
            //             <Tab _hover={{
            //                 bg:'blackAlpha.400'
            //             }} 
            //             rounded={{
            //                 base:'base',
            //                 md:'md',
            //                 lg:'lg',
            //                 xl:'xl'
            //             }} 
            //             id={''} onClick={()=> setName('')}
            //                 key={''}
            //                 display={'flex'}
            //                 justifyContent={'space-between'}
            //                 maxW={'100%'}
            //                 minW={'100%'}
            //                  > 
            //                 <Text> All </Text>
                            
            //                 </Tab>                      {
            //         Cat?.map(data => {
            //             return(
            //                 <Tab    _hover={{
            //                     bg:'blackAlpha.400'
            //                 }}
            //                 rounded={{
            //                     base:'base',
            //                     md:'md',
            //                     lg:'lg',
            //                     xl:'xl'
            //                 }}    
            //                 id={data?.name} onClick={()=> setName(data?.name)}
            //                 key={data?.id}
            //                 display={'flex'}
            //                 justifyContent={'space-between'}
            //                 maxW={'100%'}
            //                 minW={'100%'}
            //                  > 
            //                 <Text> {data?.name} </Text>
            //                 <Image 
            //                 w={'30px'}
            //                 h={'30px'} 
     
            //                 rounded={'md'}
            //                 src={data?.image} />
            //                 </Tab>
    
            //             )
            //         })
            //     }
            //     </TabList>
               
            // </Tabs>
            <Tabs colorScheme='blue'
            display={'flex'}
            justifyContent={'center'}
            w={'100%'}

            bg={useColorModeValue('gray.400', 'blackAlpha.800')}            alignItems={'center'}
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
                
            justifyContent={'space-between'}
            w={'100%'}
                 >
                    <Tab 
                    _hover={{
                            bg:'blue.400'
                        }} 
                       
                        id={''} 
                        onClick={()=> setName('')}
                            key={''}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            maxW={'10%'}
                            minW={'10%'}
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
                            <Tab _hover={{
                                bg:'blackAlpha.400'
                            }}
                            id={data?.name} onClick={()=> setName(data?.name)}
                            display={'flex'}
                            flexDirection={'column-reverse'}
                            justifyContent={'space-between'}
                            maxW={'10%'}
                            minW={'10%'}
                           
                            rounded={{
                                base:'base',
                                md:'md',
                                lg:'lg',
                                xl:'xl'
                            }}
                             > 
                            <Text> {data?.name} </Text>
                            <Image 
                            w={'80%'}
                            // h={'30px'} 
     
                            rounded={'md'}
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
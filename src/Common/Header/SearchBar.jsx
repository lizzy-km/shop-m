import React, { useState } from 'react'
import { AddIcon, CloseIcon, MoonIcon, Search2Icon, SmallCloseIcon, SunIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Flex,  FormControl,  Icon,  Image,  Input,  Link, Skeleton, SkeletonCircle, Text, border, useColorMode } from "@chakra-ui/react";
import data from "../../Components/ProductCard/data";

const SearchBar = () => {
    const {isLoading,filterProducts} = data()

    const [searchText,setSearchText] = useState('')
    const {Realproducts}  =filterProducts()
  
    const products = Realproducts?.filter(data => data?.title.toLowerCase()?.includes(searchText) )
  
    const searchHandler = (e)=>{  
      e.preventDefault();
  
     setSearchText(e.target.value)
     console.log(searchText.length);
      
    }
  
  return (
    <FormControl
        display={'flex'}
        alignItems={'center'}
        gap={'2'}
        position={'relative'}
        justifyContent={'flex-start'}
        maxH={'80%'}
        minH={'80%'}
        bg={'blackAlpha.700'}
        px={'3'}
        py={'0.7'}
        rounded={'full'}
        onChange={(e)=> searchHandler(e) }
        >
          
        <Input
        border={'none'}
        bg={'transparent'}
        outline={'none'}
        _hover _focus _after _active _valid _firstLetter _focusVisible={{
          border:'none'
        }
        }
        rounded={'full'}
        placeholder="Search on T-rash"
        name="search" 
        value={searchText}   />
        <SmallCloseIcon
        color={'gray.400'}
        onClick={()=> setSearchText('')}
        cursor={'pointer'} 
         />

        {
           searchText.length >0 && products?.length >0 &&   <Flex
           p={'2'}
           rounded={'lg'}
           scrollBehavior={'none'}
           
           gap={'3'}
           position={'absolute'}
           zIndex={'99'}
           bottom={'-500%'}
           bg={'blackAlpha.800'}
           maxH={'200px'}
           minH={'200px'}
           overflowY={'auto'}
           flexDirection={'column'}
           >
            <Flex
            // p={'2'}
            rounded={'lg'}
            scrollBehavior={'none'}
            
            gap={'3'}
            // position={'absolute'}
            zIndex={'99'}
            // bottom={'-500%'}
            bg={'blackAlpha.800'}
            maxH={'100%'}
            minH={'100%'}
            overflowY={'auto'}
            flexDirection={'column'}
            >
              {
             products?.map(item => {
               return(
                <Flex
                gap={'2'}
                 key={item.id+item.title} >
                  <Image
                  fallback={<SkeletonCircle
                    w={'40px'}
                    h={'40px'}
                  />}
                  w={'40px'}
                  h={'40px'}
                  rounded={'full'}

                  src={item.images}
                  />
                    <Text> {item?.title} </Text>
                </Flex>
                 
   
               )
             })
           }
            </Flex>
           
           </Flex>
        }
        
      
       
        </FormControl>
  )
}

export default SearchBar

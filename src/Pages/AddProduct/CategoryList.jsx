import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useGetCategoriesQuery } from '../../RTK/API/FakeAuth'

const CategoryList = ({categoryType,setCategoryType,setCateId}) => {

    const {data} = useGetCategoriesQuery()
    
    

  return (
    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    {categoryType}
  </MenuButton>
  <MenuList 
  maxH={'150px'}
  overflowY={'scroll'}
   >
    {
        data?.toReversed().map(data => {
            return(
                <MenuItem
                onClick={()=>{ 
                    setCategoryType(data?.name)
                    setCateId(data?.id)
                }}
                 minH='48px'>
                <Image
                objectFit={'cover'}
                  boxSize='2rem'
                  borderRadius='full'
                  src={data?.image}
                  alt='Fluffybuns the destroyer'
                  mr='12px'
                />
                <Text>{data?.name}</Text>
              </MenuItem>
            )
        })
    }
   
  
  </MenuList>
</Menu>
  )
}

export default CategoryList
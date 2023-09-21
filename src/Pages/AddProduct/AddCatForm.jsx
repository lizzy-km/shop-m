import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Flex, FormControl, FormLabel, Image, Input, Menu, MenuButton, MenuItem, MenuList, Skeleton, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useCreateCategoriesMutation, useGetCategoriesQuery } from '../../RTK/API/FakeAuth'

const AddCatForm = ({setCategoryType}) => {

    const [addCategory,{isLoading}] =useCreateCategoriesMutation()
    const[name,setName] = useState()
    const[image,setImage] = useState('https://i.pinimg.com/564x/cd/12/b6/cd12b6abe71866fd0d989ba932ec2f94.jpg')

    const category ={
      name: name,
      image: image
    }

    const toast = useToast()

    const newCategory = async (e) => {
        try{
            e.preventDefault();
            const cate = await addCategory(category)
            console.log(cate);
            if (cate?.data) {
                toast({
                    position: 'top-right',
                    title: 'Category created successfully.',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                  })
            }else{
              toast({
                  position: 'top-right',
                  title: 'Failed to create new category!',
                  status: 'error',
                  duration: 2000,
                  isClosable: true,
                })
          }
    
        }catch(error){
    
        }
      }


  return (
    <Menu>
  <MenuButton as={Button} rightIcon={<AddIcon />}>
  </MenuButton>
  <MenuList 
  display={'flex'}
  flexDirection={'column'}
  gap={'4'}
  p={'2'}
   >
   <Flex 
    flexDirection={'column'}
    minH='48px'>
   <FormControl>
                    <FormLabel htmlFor="email">Category name</FormLabel>
                    <Input value={name} onChange={(e)=> setName(e.target.value)} id="email" type="email" />
    </FormControl>
   </Flex>
   <Flex 
    flexDirection={'column'}
    minH='48px'>
   <FormControl>
                    <FormLabel alignItems={'center'} gap={'4'} display={'flex'} htmlFor="email"> <Text>Category image</Text>  <Image 
                        shadow={'0px 0px 2px #121212'}
                        w={'40px'}
                        h={'40px'}
                        objectFit={'cover'}
                        rounded={'full'}
                        fallback={<Skeleton/>}
                        src={image}
                        /> </FormLabel>
                    <Input value={image} onChange={(e)=> setImage(e.target.value)} id="image" type="text" />
                     
                    
    </FormControl>
   </Flex>
   <Button 
        bg={
            isLoading ? 'blackAlpha.500' : 'gray.700'
        }
        cursor={
            isLoading? 'not-allowed' : 'pointer'
        }
   onClick={
    isLoading ? '' :
    newCategory
}
   rounded={'md'}
    >
        Add Product
   </Button>
  
  </MenuList>
</Menu>
  )
}

export default AddCatForm
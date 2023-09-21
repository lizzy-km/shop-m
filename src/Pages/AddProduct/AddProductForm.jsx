import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Skeleton, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useCreateProductsMutation } from '../../RTK/API/FakeAuth'

const AddProductForm = ({cateId}) => {
    const [addProducts,{isLoading}] =useCreateProductsMutation()
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState(0)
    const [description,setDescription] = useState('')
    const [images,setImages] = useState('')
 

  const products = {
    title,
    price,
    description,
    categoryId: cateId,
    images: [images]
  }

  const toast = useToast()


  const newProducts = async(e) => {
    try{
      e.preventDefault();
      const data = await addProducts(products)
      console.log(data);
      if (data?.data) {
        toast({
            position: 'top-right',
            title: 'Product added successfully!',
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
    }else{
        toast({
            position: 'top-right',
            title: 'Product added fail!',
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
    }

    }catch(error){

    }
  }
  return (
    <Flex 
    w={'100%'}
    justifyContent={'center'}
    justify={'center'}

    alignItems={'center'}
     >
        <Flex
        flexDirection={'column'} 
        boxShadow={'0px 0px 4px '}
        py={'1rem'}
        px={'2rem'}
        rounded={'lg'}
        gap={'3'}
         >
        <FormControl isRequired >
            <FormLabel>Product Name</FormLabel>
            <Input value={title} onChange={(e)=> setTitle(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Price</FormLabel>
            <Input  value={price} onChange={(e)=> setPrice(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Product Detail</FormLabel>
            <Input  value={description} onChange={(e)=> setDescription(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel
            alignItems={'center'} gap={'4'} display={'flex'}
            >Images
            <Image 
                        shadow={'0px 0px 2px #121212'}
                        w={'40px'}
                        h={'40px'}
                        objectFit={'cover'}
                        rounded={'full'}
                        fallback={<Skeleton/>}
                        src={images}
                        />
            </FormLabel>
            <Input  value={images} onChange={(e)=> setImages(e.target.value)} /> 
            

        </FormControl>
        
        <Button 
        bg={
            isLoading ? 'blackAlpha.500' : 'gray.700'
        }
        cursor={
            isLoading? 'not-allowed' : 'pointer'
        }
   onClick={
    isLoading ? '' :
    newProducts
}
   rounded={'md'}
    >
        Add Product
   </Button>
        </Flex>
    
    </Flex>
    
  )
}

export default AddProductForm

import React, { useState } from 'react'
import {  useCreateProductsMutation } from '../../RTK/API/FakeAuth'
import {  Flex, Text } from '@chakra-ui/react'
import CategoryList from './CategoryList'
import AddCatForm from './AddCatForm'

const AddProduct = () => {
    const [addProducts] =useCreateProductsMutation()
    const[categoryType,setCategoryType] = useState('Category Type')
    const[cateId,setCateId] = useState()
 

  const products = {
    title: "Armaf Club De Nuit Intense Man Parfum (Limited Edition)",
    price: 130,
    description: "Selling 100% authentic brand name perfumes. Every bottle is guaranteed authentic. The merchant checks every time before buying that it is a shop that sells genuine brands only!!!",
    categoryId: cateId,
    images: ["https://lzd-img-global.slatic.net/g/ff/kf/S24b33abd430b435791ad517959deb065V.jpg_720x720q80.jpg_.webp"]
  }

  const newProducts = async(e) => {
    try{
      e.preventDefault();
      const data = await addProducts(products)
      console.log(data);

    }catch(error){

    }
  }

  
  return (
    <Flex
    mt={'90px'}
    w={'100%'}
    justify={'center'}
    >
        <Flex
        gap={'8'} 
        justify={'center'}
         >
        <Text
        fontSize={'2xl'}
        fontWeight={'semibold'}
         >Add New Product</Text>
         <Flex 
         gap={'2'}
          >
         <CategoryList setCateId={setCateId} categoryType={categoryType} setCategoryType={setCategoryType} />
        <AddCatForm setCategoryType={setCategoryType}/>
         </Flex>
         
        </Flex>
       
    </Flex>
  )
}

export default AddProduct
import { Button, ButtonGroup, CloseButton, Flex, Link, Select, useColorModeValue } from '@chakra-ui/react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart, addPrice, minusPrice, removeCart, subtractCartQuantity } from '../../RTK/Services/CartSlice'
import { useEffect } from 'react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import Cookies from 'js-cookie'
const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}

export const CartItem = (props) => {

    const dispatch = useDispatch()
    

  const {
    id,
    isGiftWrapping,
    title,
    description,
    quantity,
    images,
    currency,
    price,
    onChangeQuantity,
    setTotal,
    item,
    oneItemPrice
    
  } = props

  const img = images?.filter(data => data[1] )

  console.log(img);
 

 



  const addQty =()=>{
    dispatch(AddToCart(item))
 }
 
  const minusQty =()=>{
    dispatch(subtractCartQuantity(item))
 }

 


  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        title={title}
        description={description}
        image={img}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <ButtonGroup>
            <Button>
                <AddIcon onClick={addQty} />
            </Button>
            <Button> {quantity} </Button>
            <Button>
                <MinusIcon onClick={minusQty} />
            </Button>
        </ButtonGroup>
       
        <PriceTag price={oneItemPrice} currency={currency} />
        <CloseButton aria-label={`Delete ${title} from cart`} onClick={()=> dispatch(removeCart(props)) } />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  )
}
import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { CartOrderSummary } from './CartOrderSummary'
import {  useSelector } from 'react-redux'
import { CartItem } from './Cartitem'
import Cookies from 'js-cookie'
import Function from '../../Function'
  
const Cart = () =>
 {
    const cartData = useSelector(state => state.CartSlice.cart)
    
    const {isAuth} = Function()
    const {is} = isAuth()

    if (!is) {
      window.location.replace('/')
    }
    
    const cart = useSelector(state => state.CartSlice.cart)
    let totalamount =0;
    if (cart?.length ===1) {
      totalamount = cart?.map((data)=> totalamount=data?.oneItemPrice  )

    }if(cart?.length >1) {
     const sol = cart?.map(data => data.oneItemPrice)

     totalamount =sol.reduce((accu,curr)=> { return accu+curr} )

 

    }if(cart?.length ===0) {
      Cookies.remove('Cart')
    }

    return  (

    <Box
    mt={'8'}
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        align={{
          lg: 'flex-start',
        }}
        spacing={{
          base: '8',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({cartData?.length} items)
          </Heading>
  
          <Stack spacing="6">
            {cartData?.map((item) => (
              <CartItem  key={item?.id} {...item} item={item} />
            ))}
          </Stack>
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary total={totalamount} />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link href='/' color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )}
  export default Cart
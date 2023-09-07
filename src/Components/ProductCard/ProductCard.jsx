import {
    AspectRatio,
    Badge,
    Box,
    Button,
    Flex,
    HStack,
    Image,
    Link,
    Skeleton,
    Stack,
    Text,
    useColorModeValue,
    useStatStyles,
  } from '@chakra-ui/react'
  import { Rating } from './Rating'
  import { FavouriteButton } from './FavouriteButton'
  import { PriceTag } from './PriceTag'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart, addPrice } from '../../RTK/Services/CartSlice'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
  
  export const ProductCard = (props) => {
    const { product, rootProps } = props
    const {id, title, price,salePrice, description, rating,images } = product
    const rate =price?.toString().slice(0,2)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.CartSlice.cart)
    const isCart = cart?.find(data => data?.id === id)
    const Cart = cart?.filter(data => data.id ===id)
    const isProduct = product?.length > 0

    let PCprice;
    const AddCart = ()=>{
        
        
            dispatch(AddToCart(product))

            const Cprice = Cookies.get('Cart')

            if (Cprice) {
                PCprice = JSON.parse(Cprice)?.cart
        
            }
              const isCart = PCprice?.find(data => data.id === id) 
        
              console.log(isCart);
            if (isCart) {
                dispatch(addPrice(product))

            }
        
    }
    
    
    
    return (
      <Stack 
        shadow={'0px 0px 4px .5px  #121212'}
        rounded={{
            base: 'md',
             md: 'xl',
        }}
        spacing={{
          base: '4',
          md: '5',
        }}
        {...rootProps}
      >
        <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
                        src={images[2]}
                        alt={title}
                        draggable="false"
                        fallback={<Skeleton borderTopRadius={{
                          base: 'md',
                          md: 'xl',
                        }} />}
                        borderTopRadius={{
                          base: 'md',
                          md: 'xl',
                        }}
                      />
           
           
          </AspectRatio>
        
          <FavouriteButton id={id} 
            position="absolute"
            top="4"
            right="4"
            aria-label={`Add ${title} to your favourites`}
          />
        </Box>
        <Stack         
        p={'2'}
                >
          <Stack spacing="1">
            <Text noOfLines={'1'} fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
              {title}
            </Text>
            <PriceTag price={price} salePrice={salePrice} currency="USD" />
          </Stack>
          <HStack>
            <Rating defaultValue={rate} size="sm" />
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              {rate} Reviews
            </Text>
          </HStack>
        </Stack>

        <Stack bg={'blue.200'}
         borderBottomRadius={{
            base: 'md',
            md: 'xl',
          }} 
          align="center">
          <Flex  
          justify={'center'} 
          h={'40px'} 
          alignItems={'center'} 
          justifyItems={'center'} 
          rounded={'none'}  
          bg={'blue.200'} 
          width="full">
            {
                !isCart ?  (<Button 
                marginTop={'-20px'} 
                onClick={AddCart} 
                shadow={'0px 0px 4px #121212'} 
                rounded={'full'} 
                h={'40px'} 
                w={'40px'} 
                p={0}
                bg={useColorModeValue('white', 'blackAlpha.800')}
    
                 >
                <FaCartPlus />
    
                </Button>) : (
                    <Button 
                    position={'relative'}
                    marginTop={'-20px'} 
                    onClick={AddCart} 
                    shadow={'0px 0px 4px #121212'} 
                    rounded={'full'} 
                    h={'40px'} 
                    w={'40px'} 
                    p={0}
                    bg={useColorModeValue('blue.300', 'blue.800')}
        
                     >
                        <Badge 
                        color={useColorModeValue('white', 'white')} 
                        top={'-5%'} right={'-5%'} 
                        bg={useColorModeValue('gray.500', 'blackAlpha.800')} 
                        roundedBottomRight={'full'} 
                        roundedTop={'full'} 
                        position={'absolute'} > {Cart[0]?.quantity} </Badge>
                    <FaCartPlus />
        
                    </Button>
                )
            }
            
          </Flex>
          <Link 
          paddingX={'2'}
          bg={useColorModeValue('gray.500', 'blackAlpha.800')}
           borderTopRadius={{
            base: 'sm',
            md: 'md',
          }}
            fontWeight="medium"
            color={useColorModeValue('white', 'white')}
          >
            Quick shop
          </Link>
        </Stack>
      </Stack>
    )
  }
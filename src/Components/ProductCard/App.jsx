import { AspectRatio, Badge, Box, Button, Skeleton, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { ProductCard } from './ProductCard'
import { ProductGrid } from './ProductGrid'
import data from './data'
import { useEffect } from 'react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import Function from '../../Function'
import Cookies from 'js-cookie'

 const App = ({load}) =>{
    const {isLoading,filterProducts,setCount,count,filterProductsCat} = data()
    const {arr} = Function()

    const {Realproducts}  =filterProducts()

    let {RealProducts} = filterProductsCat()
    let catName = Cookies.get('CatName')
    useEffect(()=>{
      filterProductsCat()
      catName = Cookies.get('CatName')
    },[load])

    

    return (
  <Box
    className='maxH'
    overflowY={'scroll'}
    maxW="7xl"
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '1',
      md: '1',
      lg: '1',
    }}
  >
    <ProductGrid  >
      {
        isLoading && 
        arr?.map(data => {
          return(
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
      >
        <Skeleton 
        position="relative"
        w={{
          base:'200px',
          md:'200px',
          lg:'200px',
          xl:'210px'
        }}
        rounded={'lg'}
        >
        <AspectRatio 
        ratio={4 / 3}>
          <Skeleton 
                        src={data.id}
                        alt={'title'}
                        draggable="false"
                        fallback={<Skeleton />}
                        borderTopRadius={{
                          base: 'md',
                          md: 'xl',
                        }}
                      />
           
           
          </AspectRatio>
        
          <Skeleton id={'id'} 
            position="absolute"
            top="4"
            right="4"
            aria-label={`Add ${'title'} to your favourites`}
          />
        </Skeleton>
        <Stack         
        p={'2'}
                >
          <Skeleton spacing="1">
            <Skeleton noOfLines={'1'} fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
              {'title'}
            </Skeleton>
            <Skeleton price={'price'} salePrice={'salePrice'} currency="USD" />
          </Skeleton>
          <Skeleton>
            <Skeleton defaultValue={'rate'} size="sm" />
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              {'rate'} Reviews
            </Text>
          </Skeleton>
        </Stack>

        <Stack bg={'blackAlpha.200'}
         borderBottomRadius={{
            base: 'md',
            md: 'xl',
          }} 
          align="center">
          <Stack  
          justify={'center'} 
          h={'40px'} 
          alignItems={'center'} 
          justifyItems={'center'} 
          rounded={'none'}  
          bg={'blackAlpha.200'} 
          width="full">
            
                
                    <Skeleton 
                    position={'relative'}
                    marginTop={'-20px'} 
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
                        position={'absolute'} >  </Badge>
        
                    </Skeleton>
              
          </Stack>
          <Skeleton 
          paddingX={'2'}
          w={'100px'}
          bg={useColorModeValue('gray.500', 'blackAlpha.800')}
           borderTopRadius={{
            base: 'sm',
            md: 'md',
          }}
            fontWeight="medium"
            color={useColorModeValue('white', 'white')}
          >
            
          </Skeleton>
        </Stack>
      </Stack>
          )
        })
        

        
      }
      { !isLoading && catName === '' &&
        Realproducts?.map((product) => (
          <ProductCard  fallback={<Skeleton />} key={product.id} product={product} />
        ))
      }
      { !isLoading && catName === 'All' &&
        Realproducts?.map((product) => (
          <ProductCard  fallback={<Skeleton />} key={product.id} product={product} />
        ))
      }
      { !isLoading && RealProducts?.length ===0 &&

        Realproducts?.map((product) => (
           <ProductCard  fallback={<Skeleton />} key={product.id} product={product} />
      ))

}
      { !isLoading && RealProducts?.length >0 &&

        RealProducts?.map((product) => (
          <ProductCard  fallback={<Skeleton />} key={product.id} product={product} />
        ))
      
      }
      
      {
        !isLoading && catName === '' && <Button onClick={()=> setCount(count+20)} bg={'transparent'} alignSelf={'center'} w={'60px'} h={'60px'} rounded={'full'} gap={'2'} ><Text>More</Text> <ArrowRightIcon alignSelf={'center'}  /> </Button>

      }
    </ProductGrid>

  </Box>
)
}
export default App
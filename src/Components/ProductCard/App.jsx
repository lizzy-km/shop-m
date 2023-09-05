import { Box } from '@chakra-ui/react'
import { ProductCard } from './ProductCard'
import { ProductGrid } from './ProductGrid'
import data from './data'

 const App = () =>{
    const {products} = data()

    const Realproducts = products?.filter((data) => data?.id <40 )

    console.log(Realproducts)


    return (
  <Box
    maxW="7xl"
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
    <ProductGrid>
      {Realproducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  </Box>
)}
export default App
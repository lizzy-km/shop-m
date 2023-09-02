import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useLoginMutation } from '../RTK/API/Auth'
import { useState } from 'react'

const Login = ()=> {
    const[email,setEmail] = useState('')
    const[password,setPass] = useState('')

    const [login] = useLoginMutation()

    

    const LoginHandler = async(e)=>{
            try{

                e.preventDefault();
                const user ={
                
                 email,
                 password,
                
                };

                const data = await login(user)
                console.log(data);

                if (data?.success) {
                    console.log(data);
                }

            }catch(error){
                console.log(error);
            }
    }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in</Heading>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=> setPass(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.900'}>Forgot password?</Text>
              </Stack>
              <Button onClick={LoginHandler}
                bg={'blue.900'}
                color={'white'}
                _hover={{
                  bg: 'gray.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Login
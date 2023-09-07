import {
  Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  
import { useEffect, useState } from 'react'
import { Logo } from './LoginUtil/Logo'
import { PasswordField } from './LoginUtil/PasswordField'
import { OAuthButtonGroup } from './LoginUtil/OAuthButtonGroup'
import {  useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import Function from '../Function'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useGetSingleUserQuery } from '../RTK/API/FakeAuth'

const Login = ()=> {
    const[fname,setFname] = useState()
    const[lname,setLname] = useState()
    const name = fname + lname
    const[email,setEmail] = useState()
    const[avatar,setAvatar] = useState('https://github.com/lizzy-km/image/blob/main/shopping-cat-with-cart-upscaled.png?raw=true')
    const[password,setpassword] = useState()
    const[password_confirmation,setPassword_confirmation] = useState()
    const[err,setErr] = useState()

    const userData = useSelector(state => state.AuthSlice.user)

    const {LoginHandler,SignupHandler} = Function()
    
    const User = useGetSingleUserQuery()


    const Rdata = User?.data

    const Dd = Rdata?.filter(data => data?.email === userData?.email )
    const Ds = Dd?.filter(data=> data?.password === userData?.password)
     const Fds = Ds?.find(data => data)

   
    

        
    let pis;

if (Fds?.email) {
  Cookies.set('ID',JSON.stringify(Fds))
  window.location.reload(true)

  }


  const {isAuth} = Function()
  const {is} = isAuth()

  if (is) {
    window.location.reload(true)
  }

  
  
 
 
 const [showPassword, setShowPassword] = useState(false)
    

      const[newAcc,setNewAcc] = useState(false)

      if (newAcc === false) {
        return (
          <Container  mt={'6'}
          maxW="lg"
          py={{
            base: '12',
            md: '24',
          }}
          px={{
            base: '0',
            sm: '8',
          }}
        >
          <Stack spacing="8">
            <Stack spacing="6">
              <Logo />
              <Stack
                spacing={{
                  base: '2',
                  md: '3',
                }}
                textAlign="center"
              >
                <Heading
                  size={{
                    base: 'xs',
                    md: 'sm',
                  }}
                >
                  Log in to your account
                </Heading>
                <Text color="fg.muted">
                  Don't have an account? <Link onClick={()=> setNewAcc(!newAcc)} >Sign up</Link>
                </Text>
              </Stack>
            </Stack>
            <Box
              py={{
                base: '0',
                sm: '8',
              }}
              px={{
                base: '4',
                sm: '10',
              }}
              bg={{
                base: 'transparent',
                sm: 'bg.surface',
              }}
              boxShadow={{
                base: 'none',
                sm: 'md',
              }}
              borderRadius={{
                base: 'none',
                sm: 'xl',
              }}
            >
              <Stack spacing="6">
                <Stack  spacing="5">
                  {
                   userData?.length && !Fds?.email && <Text color={'red.500'} >
                      Incorrect email or password!
                    </Text>
                  }
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input value={email} onChange={(e)=> setEmail(e.target.value)} id="email" type="email" />
                  </FormControl>
                  <PasswordField password={password} setpassword={setpassword} />
                </Stack>
                <HStack justify="space-between">
                  <Checkbox defaultChecked>Remember me</Checkbox>
                  <Button variant="text" size="sm">
                    Forgot password?
                  </Button>
                </HStack>
                <Stack spacing="6">
                  <Button onClick={(e)=>LoginHandler(e,userData,email,password,name,avatar)} >Sign in</Button>
                  <HStack>
                    <Divider />
                    <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                      or continue with
                    </Text>
                    <Divider />
                  </HStack>
                  <OAuthButtonGroup />
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
        )
      }else{
        return (
          <Flex mt={'6'}
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <Stack align={'center'}>
                <Heading fontSize={'4xl'} textAlign={'center'}>
                  Sign up
                </Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                  to enjoy all of our cool features ✌️
                </Text>
              </Stack>
              <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input value={fname} onChange={(e)=> setFname(e.target.value)} type="text" />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Input value={lname} onChange={(e)=> setLname(e.target.value)} type="text" />
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    {
                      err?.password && <Text color={'red.500'} > {err?.password} </Text>
                    }
                    <InputGroup>
                      <Input value={password} onChange={(e)=> setpassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
                      <InputRightElement h={'full'}>
                        <Button
                          variant={'ghost'}
                          onClick={() => setShowPassword((showPassword) => !showPassword)}>
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    
                    
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                      <Input value={password_confirmation} onChange={(e)=> setPassword_confirmation(e.target.value)} type={showPassword ? 'text' : 'password'} />
                      <InputRightElement h={'full'}>
                        <Button
                          variant={'ghost'}
                          onClick={() => setShowPassword((showPassword) => !showPassword)}>
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Profile image <Text color={'red.500'}  >(Paste your image Url)</Text> </FormLabel>
                    <InputGroup>
                      <Input   onChange={(e)=> setAvatar(e.target.value)} type= 'text' />
                      <InputRightElement h={'full'}>
                        <Avatar src={avatar} />
                      </InputRightElement>
                    </InputGroup>
                    
                    
                  </FormControl>
                  { err?.length >1 &&
                    err?.map(data =>{
                      return(
                        <Text color={'red.500'} > {data} </Text>

                      )
                    })
                  }{
                    err?.length ===1 && <Text color={'red.500'} > {err} </Text>
                  }
                  <Stack spacing={10} pt={2}>
                    <Button onClick={(e)=>SignupHandler(e,name,email,password,password_confirmation,setNewAcc,newAcc,avatar,setErr)}
                      loadingText="Submitting"
                      size="lg"
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}>
                      Sign up
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={'center'}>
                      Already a user? <Link onClick={()=> setNewAcc(!newAcc)} color={'blue.400'}>Login</Link>
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        )
      }


  
}

export default Login
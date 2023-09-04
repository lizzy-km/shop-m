import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
  } from '@chakra-ui/react'
  
import { useEffect, useState } from 'react'
import { Logo } from './LoginUtil/Logo'
import { PasswordField } from './LoginUtil/PasswordField'
import { OAuthButtonGroup } from './LoginUtil/OAuthButtonGroup'
import { useContactMutation, useGetContactQuery, useLoginMutation } from '../RTK/API/Auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import {  LoginHandler } from '../Function'

const Login = ()=> {
    const[email,setEmail] = useState()
    const[password,setPass] = useState()

    const [login,{isLoading}] = useLoginMutation()
    const [fakeLogin] = useContactMutation()
    const userData = useSelector(state => state.AuthSlice.user)

    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuth = Cookies.get('User')
   




console.log(userData);  

if (userData?.id) {
  Cookies.set('ID',userData?.id)

  window.location.reload(true)
 }

    




  return (
    <Container
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
            Don't have an account? <Link href="#">Sign up</Link>
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
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input value={email} onChange={(e)=> setEmail(e.target.value)} id="email" type="email" />
            </FormControl>
            <PasswordField password={password} setPass={setPass} />
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button variant="text" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button onClick={(e)=>LoginHandler(e,login,fakeLogin,userData,navigate,dispatch,email,password)} >Sign in</Button>
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
}

export default Login
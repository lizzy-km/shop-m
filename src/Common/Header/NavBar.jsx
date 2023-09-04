import {  Box, Button, Flex, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { useGetContactQuery, useLogoutMutation } from '../../RTK/API/Auth'
import Cookies from 'js-cookie'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import MenuIcon from './MenuIcon'

const NavBar = () => {
    const { colorMode,toggleColorMode } = useColorMode()

    const id = Cookies.get('ID')
    const token = Cookies.get('User')
                  const {data} = useGetContactQuery(id)

                  console.log(data);
                    const [signout] = useLogoutMutation()
                  const Logout =async()=>{
                            const bye = signout(token)
                            console.log(bye);
                            Cookies.remove('User')
                            window.location.reload(true)
                  }

  return (
    <Flex w={'100%'} h={'60px'} bg={'blackAlpha.800'} justify={'space-between'} alignItems={'center'} padding={'3'} >
        <Flex>

        </Flex>
        <Flex gap={'3'} >
            {
                token && <Box>
                <MenuIcon Logout={Logout} data={data} />
                </Box> 
            }
             
        <Box>
        <Button rounded={'full'} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
    </Box>
        </Flex>
        
    </Flex>
  )
}

export default NavBar
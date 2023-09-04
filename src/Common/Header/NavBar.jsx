import { Avatar, Box, Button, Flex, IconButton,  Menu,  MenuButton,  MenuDivider,  MenuItem,  MenuList,  useColorMode, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { HiLogout, HiMenuAlt1, HiOutlineLockClosed, HiOutlineMenuAlt3, HiOutlineUserCircle, HiSun, HiUser } from 'react-icons/hi'
import { useGetContactQuery } from '../../RTK/API/Auth'
import Cookies from 'js-cookie'

const NavBar = () => {
    const { colorMode,toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const id = Cookies.get('ID')
                  const {data} = useGetContactQuery(id)

                  console.log(data);

  return (
    <Flex w={'100%'} h={'60px'} bg={'blackAlpha.800'} justify={'space-between'} alignItems={'center'} padding={'3'} >
        <Flex>

        </Flex>
        <Flex gap={'3'} >
            <Box>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem gap={'4'} > <HiOutlineUserCircle/>  <p>{data?.contact?.name}</p> </MenuItem>
                <MenuItem gap={'4'} >  <HiOutlineLockClosed color='blue.200' /> <p>Account setting</p> </MenuItem>
                <MenuDivider />
                <MenuItem color={'red.500'} gap={'4'} ><HiLogout/> <p>Logout</p>  </MenuItem>
              </MenuList>
            </Menu>
            </Box>
        <Box>
      <IconButton rounded={'full'}  onClick={toggleColorMode} >
        <HiSun/>
      </IconButton>
    </Box>
        </Flex>
        
    </Flex>
  )
}

export default NavBar
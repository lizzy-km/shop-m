import React from 'react'
import { Avatar,  Button,    Menu,  MenuButton,  MenuDivider,  MenuItem,  MenuList,    } from '@chakra-ui/react'
import { HiLogout, HiOutlineLockClosed, HiOutlineUserCircle } from 'react-icons/hi'


const MenuIcon = ({data,Logout}) => {
  return (
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
                <MenuItem onClick={Logout} color={'red.500'} gap={'4'} ><HiLogout/> <p>Logout</p>  </MenuItem>
              </MenuList>
            </Menu>
  )
}

export default MenuIcon
import React, { useCallback } from 'react'
import { Avatar,  Button,    Menu,  MenuButton,  MenuDivider,  MenuItem,  MenuList,    } from '@chakra-ui/react'
import { HiLogout, HiOutlineLockClosed, HiOutlineUserCircle } from 'react-icons/hi'
import { useGetContactQuery } from '../../RTK/API/Auth'
import Cookies from 'js-cookie'

const MenuIcon = useCallback(({Logout}) => {

    const id = Cookies.get('ID')

    const {data} = useGetContactQuery(id)
    

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
},[])



export default MenuIcon
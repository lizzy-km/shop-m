import React from 'react'
import { Avatar,  Button,    Menu,  MenuButton,  MenuDivider,  MenuItem,  MenuList,    } from '@chakra-ui/react'
import { HiLogout, HiOutlineLockClosed, HiOutlineUserCircle } from 'react-icons/hi'
import { useGetContactQuery } from '../../RTK/API/Auth'
import Cookies from 'js-cookie'
import { useGetSingleUserQuery } from '../../RTK/API/FakeAuth'
import { useSelector } from 'react-redux'

const MenuIcon = ({Logout}) => {

    const id = Cookies.get('LID')

    const {data} = useGetSingleUserQuery(id)
    
    console.log(data);


return (
    <Menu>
              <MenuButton
                as={Button}
                w={'40px'}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                src={data?.avatar}
                  // size={'sm'}
                  w={'39px'}
                  h={'39px'}
                 
                />
              </MenuButton>
              <MenuList>
                <MenuItem gap={'4'} > <HiOutlineUserCircle/>  <p>{data?.name}</p> </MenuItem>
                <MenuItem gap={'4'} >  <HiOutlineLockClosed color='blue.200' /> <p>Account setting</p> </MenuItem>
                <MenuDivider />
                <MenuItem onClick={Logout} color={'red.500'} gap={'4'} ><HiLogout/> <p>Logout</p>  </MenuItem>
              </MenuList>
            </Menu>
  )
}



export default MenuIcon
import React from 'react'
import { Avatar,  Button,    Menu,  MenuButton,  MenuDivider,  MenuItem,  MenuList,    } from '@chakra-ui/react'
import { HiLogout, HiOutlineLockClosed, HiOutlineUserCircle } from 'react-icons/hi'
import Cookies from 'js-cookie'
import { useGetSingleUserQuery } from '../../RTK/API/FakeAuth'
import Function from '../../Function'

const MenuIcon = ({Logout}) => {

    const id = Cookies.get('ID')
    const Ldata = JSON.parse(id)
    const User = useGetSingleUserQuery()

    

    const Rdata = User?.data

    const Dd = Rdata?.filter(data => data?.email === Ldata?.email )
    const Ds = Dd?.filter(data=> data?.password === Ldata?.password)
        const data = Ds?.find(data => data)

  

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
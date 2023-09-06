import { Icon, IconButton, LightMode } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { HiHeart } from 'react-icons/hi'

export const FavouriteButton = (props) =>{ 

  const {id} = props

  // Set Favourite Function
  const CID = `Fav${id}`

  const isF = Cookies.get(CID)
  const[fav,setFav] = useState(false)

  useEffect(()=>{
    if (isF) {
      const isFav = JSON.parse(isF)
  
      setFav(isFav)
    }
  },[])
  
  const Love =()=>{
      setFav(!fav)
    }

  useEffect(()=>{
    Cookies.set(CID,fav)

    },[fav])
 
  
 return (
  <LightMode>
    <IconButton onClick={Love}
      isRound
      bg="white"
      color="gray.900"
      size="sm"
      _hover={{
        transform: 'scale(1.1)',
      }}
      sx={{
        ':hover > svg': {
          transform: 'scale(1.1)',
        },
      }}
      transition="all 0.15s ease"
      
      icon={ fav  ? <Icon  color={'cadetblue'} as={HiHeart} transition="all 0.15s ease" /> :<Icon as={FiHeart} transition="all 0.15s ease" />}
      boxShadow="base"
      {...props}
    />
  </LightMode>
)}
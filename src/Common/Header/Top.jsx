import { Box, Button, CardBody, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Radio, RadioGroup, Stack, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"

const  Top =()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('top')
  
    return (
      <>
       
        <Button  colorScheme='blue' onClick={onOpen}>
          Open
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={screenTop}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </>
    )
  }

  export default Top
import { HStack, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'

export const Rating = (props) => {
  const { defaultValue = 0, max = 5, size = 'md', rootProps } = props
  const color = useColorModeValue('gray.200', 'gray.600')
  const activeColor = useColorModeValue('blue.200', 'blue.600')
  return (
    <HStack spacing="0.5" {...rootProps}>
      {Array.from({
        length: max,
      })
        .map((_, index) => index * 25)
        .map((index) => (
          <Icon
            key={index/100}
            as={FaStar}
            fontSize={size}
            color={index <= defaultValue ? activeColor : color}
          />
        ))}
    </HStack>
  )
}
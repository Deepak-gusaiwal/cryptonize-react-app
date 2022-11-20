import { Heading, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack h="80vh" w="full" justifyContent={"center"} alignItems="center">
      <Spinner thickness='4px'
        emptyColor='gray.200'
        color='blue.500'
        size='xl' />
      <Heading>Loading...</Heading>
    </VStack>
  )
}

export default Loader
import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import ChakraTable from '../components/ChakraTable'

export default function HomePage() {
  return (
    <>
      <Box h='100vh'>
        <Center h='100%'>
          <Box shadow='md'>

          <ChakraTable />
          </Box>
        </Center>
      </Box>
    </>
  )
}

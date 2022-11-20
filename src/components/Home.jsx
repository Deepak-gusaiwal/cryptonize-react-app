import { Heading, VStack, Text, Stack, Image, HStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { AiFillRightCircle } from 'react-icons/ai'
import HomeImg from '../assets/home.png'
import { motion } from 'framer-motion'

const Home = () => {
  const bgColor = useColorModeValue('#00a0dc', '#1e1e4399')
  return (
    <Stack bg={bgColor} p={[4, 8]} direction={['column', 'column', 'row']} position="relative" justifyContent={['center', 'space-around']} alignItems={['center', 'center', 'flex-start']} w="full" minH={['100vh', '60vh', '40vh', '90vh']} >
      <VStack alignItems="flex-start" justifyContent="flex-start" gap="2" >
        <motion.div animate={{
          translateY: "10px",
        }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse'
          }}>
          <Heading fontSize={['4xl', "5xl", '4xl', '6xl']} mb="8">The World’s Fastest  Growing Crypto App</Heading>
        </motion.div>
        <HStack transition="300ms"
          cursor="pointer"
          css={{
            "&:hover": {
              transform: 'Scale(1.1)'
            }
          }} align="flex-start"><AiFillRightCircle size="1.5rem" /> <Text>  Join 50m+ users buying and selling 250+ cryptocurrencies at true cost</Text></HStack>
        <HStack transition="300ms"
          cursor="pointer"
          css={{
            "&:hover": {
              transform: 'Scale(1.1)'
            }
          }} align="flex-start"><AiFillRightCircle size="1.5rem" /><Text>Spend with the Crypto.com Visa Card and get up to 5% back</Text></HStack>
        <HStack
          transition="300ms"
          cursor="pointer"
          css={{
            "&:hover": {
              transform: 'Scale(1.1)'
            }
          }} align="flex-start"><AiFillRightCircle size="1.5rem" /><Text>Grow your portfolio by receiving rewards up to 14.5% on your crypto assets</Text></HStack>

      </VStack>
      <motion.div animate={{
        translateY: "20px",
      }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse'
        }}>
        <Image src={HomeImg} objectFit="contain" />
      </motion.div>

    </Stack>
  )
}

export default Home
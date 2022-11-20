import { Container, Heading, VStack, Text, GridItem, SimpleGrid, HStack, Input, IconButton, Avatar, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineArrowRight, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import AvtarImg from '../assets/logo.jpg'
const Footer = () => {
    const bgColor = useColorModeValue('#78c8f4c9', '#1e1e4399')
    const bottomFooterBg = useColorModeValue('blue.300', 'black')
    const borderTopOfFooter = useColorModeValue('none', '2px solid white')
    return (
        <>
            <Container borderTop={borderTopOfFooter} mb="-2" maxW="full" px={[4, 8, 16]} pt={[4, 8, 16]} bg={bgColor} minH="50vh" >
                <SimpleGrid columns={[1, 2, 4]}>
                    <GridItem colSpan={1}>
                        <Item1 />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Item2 />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Item3 />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Item4 />
                    </GridItem>
                </SimpleGrid>
            </Container>
            <HStack px="8" py="2" bgColor={bottomFooterBg} justifyContent="space-between" my={2} >
                <VStack gap="0">
                    <Heading size="sm">
                        Social Links
                    </Heading>
                    <HStack>
                        <a target="blank" href=' https://instagram.com/doedits_a537'><AiFillInstagram size="1.5rem" /></a>
                        <a target="blank" href='https://www.youtube.com/channel/UCyqAlbXWsQ9hmVOZ8ianz9g'><AiFillYoutube size="1.5rem" /></a>
                        <a target="blank" href='https://www.linkedin.com/in/deepak-gusaiwal-721795222'><AiFillLinkedin size="1.5rem" /></a>
                    </HStack>
                </VStack>
                <Avatar size="lg" src={AvtarImg} />
            </HStack>
        </>
    )
}
const Item1 = () => {
    return (
        <>
            <VStack alignItems={['center', 'flex-start']} p={['4', '8']}>
                <Heading mb="2" size="md">App</Heading>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Buy and Sell</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Crypto Earn</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Crypto Credit</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Crypto.com Pay</Text>
            </VStack>
            <VStack alignItems={['center', 'flex-start']} p={['4', '8']}>
                <Heading mb="2" size="md">cards</Heading>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">ViSA</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">MasterCard</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Paypal</Text>
            </VStack>
        </>
    )
}
const Item2 = () => {
    return (
        <>
            <VStack alignItems={['center', 'flex-start']} p={['4', '8']}>
                <Heading mb="2" size="md">Exchange</Heading>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Exchange Home</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Margin Trading</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Derivatives Trading</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">The Syndicate</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Supercharger</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Trading Arena</Text>
            </VStack>
            <VStack alignItems={['center', 'flex-start']} p={['4', '8']}>
                <Heading mb="2" size="md">Commerce</Heading>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Pay for Business</Text>
            </VStack>
        </>
    )
}
const Item3 = () => {
    return (
        <>
            <VStack alignItems={['center', 'flex-start']} p={['4', '8']}>
                <Heading mb="2" size="md">Blockchain</Heading>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Crypto.org Chain</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Chain Explorer</Text>
            </VStack>
            <VStack alignItems={['center', 'flex-start']} p={['4', '8']}>
                <Heading mb="2" size="md">DeFi</Heading>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Wallet</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Swap</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Earn</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Dashboard</Text>
            </VStack>
        </>
    )
}
const Item4 = () => {
    const bgColor = useColorModeValue('blue.300', '#45456a99')
    return (
        <>
            <VStack alignItems={['center', 'flex-start']} p={['4', '8']}>
                <Heading mb="2" size="md">Resources</Heading>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Prices</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Site Widgets</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Tax</Text>
                <Text cursor="pointer" fontSize="sm" _hover={{ opacity: "0.5" }} transition="300ms">Support</Text>
            </VStack>
            <VStack alignItems={['center', 'flex-start']} mb="2">
                <Heading mb="2" size="md">Contact Us</Heading>
                <HStack w={['80vw', 'full']} mx="auto" borderBottom={'2px solid'} py="1">
                    <Input placeholder='your email' bg={bgColor} focusBorderColor='none' border="none" />
                    <IconButton
                        bg={bgColor}
                        aria-label='Search database'
                        borderRightRadius="3xl"
                        icon={<AiOutlineArrowRight />}
                    />
                </HStack>
            </VStack>
        </>
    )
}

export default Footer
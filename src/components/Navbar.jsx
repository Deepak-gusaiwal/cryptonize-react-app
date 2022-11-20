import { Button, Flex, Heading, HStack, IconButton,useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { AiOutlineClose ,AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
  const bgColor = useColorModeValue('#00a0dc','#1e1e4399')
  const textColor = useColorModeValue('black','white')
  const [navToggle, setNavToggle] = useState(true);

  const toggleNavFun = ()=>{
    setNavToggle(!navToggle);
  }
  return (
    <Flex boxShadow="xl" bgColor={bgColor} zIndex="overlay" position="sticky" top="0" left="0" h="80px" justifyContent="space-between" alignItems="center" p="4">
      <Flex gap="2" >
        <Heading><Link to="/">CryptoNize</Link></Heading>
        <ColorModeSwitcher />
      </Flex>

      <HStack p="4" alignItems={['flex-start', 'flex-start', 'center']} justifyContent={['flex-start', 'flex-start', "center"]} pt={['12', '12', 'inherit']} pos={['absolute', 'absolute', 'inherit']} w={['full', 'full', "inherit"]} h={['100vh', '100vh', "full"]} top={['80px', '80px', "0"]}
        left={[navToggle ? '-100%' : '0', navToggle ? '-100%' : '0', "inherit"]} flexDir={['column', 'column', 'row']} gap="2" transition="300ms" backdropFilter='auto' backdropBlur='18px'>
        <Button color={textColor} onClick={toggleNavFun} marginLeft={['8px', '8px', '0']} colorScheme="linkedin" variant="ghost"><Link to='/'>Home</Link></Button>
        <Button color={textColor} onClick={toggleNavFun} colorScheme="linkedin" variant="ghost"><Link to='/exchanges'>Exchanges</Link></Button>
        <Button color={textColor} onClick={toggleNavFun} colorScheme="linkedin" variant="ghost"><Link to='/coins'>Coins</Link></Button>
      </HStack>

      <IconButton variant="ghost" onClick={toggleNavFun} display={['flex', 'flex', 'none']}
       icon={navToggle ? <AiOutlineMenu size="1.5rem" /> : <AiOutlineClose size="1.5rem" />} />
    </Flex>
  )
}

export default Navbar
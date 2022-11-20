import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Text, Container, Heading, Image, Stack,
  Button,
  Flex,
  Select,
  HStack,
  VStack,
} from '@chakra-ui/react'
import Loader from './Loader'
import AlertComponent from './AlertComponent'
import { server } from '../index'
import { AiOutlineReload } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // eslint-disable-next-line
  const [currency, setCurrency] = useState('inr')
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"
  // eslint-disable-next-line
  const [page, setPage] = useState(1);

  const changePage = (pageNo) => {
    setLoading(true)
    if (pageNo <= 0) {
      setPage(132)
    } else if (pageNo > 132) {
      setPage(1)
    } else {
      setPage(pageNo)
    }
  }

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        if (!data) {
          setError(true);
        } else {
          setCoins(data)
          setLoading(false);
          setError(false)
        }
      } catch (error) {
        setError(true);
        setLoading(false)
        setCoins([])
      }
    }

    fetchCoins();
  }, [currency, page])

  return (
    <Container maxW={"container.xl"} py='2' >
      {
        error ? <>
          <AlertComponent title={"internal server Error"} msg={"no coins data has been fetched"} type="error" />
          <Button left="50%" variant="solid" borderRadius="50%" p="1" m="1" colorScheme="linkedin" onClick={() => { window.location.reload(true) }}> <AiOutlineReload size="1.5rem" cursor="pointer" /></Button>
        </> : ""
      }
      {
        loading ?
          <Loader />
          :
          <>
            <Heading mx="auto" borderBottom="3px solid" w="fit-content" my="2" p="1">Coins</Heading>
            <Stack>
              <Select variant='filled' onChange={(e) => { setCurrency(e.target.value) }} colorScheme="linkedin" placeholder='select-currency' maxW="96" mx="auto" my="4">
                <option value={"inr"}>Rupees</option>
                <option value={"usd"}>USD</option>
                <option value={"eur"}>Euro</option>
              </Select>
            </Stack>
            <Flex flexWrap="wrap" gap={6} justifyContent="center">

              {coins.map((item) => {
                return (
                  <CoinCards currencySymbol={currencySymbol} key={item.id} id={item.id} price={item.current_price} name={item.name} imgSrc={item.image} symbol={item.symbol} />
                )
              })}
            </Flex>
            <HStack justifyContent="flex-end" my="8">
              <Button colorScheme="linkedin" onClick={() => { changePage(page - 1) }}>Previous</Button>
              <Heading size="lg">{page}</Heading>
              <Button colorScheme="linkedin" onClick={() => { changePage(page + 1) }}>Next</Button>
            </HStack>

            <HStack overflowX="scroll" my="8" py="4" css={{
              '&::-webkit-scrollbar': {
                width: '100%',
                height:"10px"
              },
              '&::-webkit-scrollbar-track': {
                background:'#d9f5ff',
                borderRadius: '24px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#00a0dc',
                borderRadius: '24px',
              },
            }}>
              {
                btns.map((item, index) => {
                  return (
                    <Button key={index} colorScheme="linkedin" onClick={() => { if(page !== index+1){changePage(index + 1)} }}>{index + 1}</Button>
                  )
                })
              }
            </HStack>

          </>
      }
    </Container>
  )
}

const CoinCards = ({ id,name, imgSrc, symbol, price, currencySymbol }) => {
  return (
    <Link to={`/coin/${id}`}>
    <Stack direction={['row', 'column']} border="2px solid" shadow={'lg'} borderRadius='lg' p="4" justifyContent={['space-around', 'center']} alignItems="center" transition="0.3s" w={["80", "40"]} h='auto'
      css={{
        "&:hover": {
          transform: "scale(1.1)"
        }
      }} >
      <VStack>
        <Image src={imgSrc} h="20" w="20" objectFit="cover" />
        <Heading size="md" noOfLines={1}>{symbol}</Heading>
      </VStack>
      <VStack>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{currencySymbol} {price}</Text>
      </VStack>
    </Stack>
        </Link>
  )
}


export default Coins
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Text, Container, Heading, Image, Stack,
  Button,
  Flex,
} from '@chakra-ui/react'
import Loader from './Loader'
import AlertComponent from './AlertComponent'
import { server } from '../index'
import { AiOutlineReload } from 'react-icons/ai'

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`)
        if (!data) {
          setError(true);
        } else {
          setExchanges(data)
          setLoading(false);
          setError(false)
        }
      } catch (error) {
        setError(true);
        setLoading(false)
        setExchanges([])
      }
    }
    fetchExchanges();
  }, [])

  return (
    <Container maxW={"container.xl"} py='2' >
      {/* if there has an error in fetching data */}
      {
        error ? <>
          <AlertComponent title={"internal server Error"} msg={"no data has been fetched"} type="error" />
          <Button left="50%" variant="solid" borderRadius="50%" p="1" m="1" colorScheme="linkedin" onClick={() => { window.location.reload(true) }}> <AiOutlineReload size="1.5rem" cursor="pointer" /></Button>
        </> : ""
      }
      {/* showing loading until data get fetched from the server then show data */}
      {
        loading ?
          <Loader />
          :
         <>
         <Heading mx="auto" borderBottom="3px solid" w="fit-content" my="2" p="1">Exchanges</Heading>
          <Flex flexWrap="wrap" gap={6}   justifyContent="center">
            {exchanges.map((item) => {
              return (
                <ExchnageCard key={item.id} name={item.name} imgSrc={item.image} rank={item.trust_score_rank} url={item.url} />
              )
            })}
          </Flex>
         </>
      }
    </Container>
  )
}

const ExchnageCard = ({ name, imgSrc, rank, url }) => {
  return (
    <a href={url} target="blank">
      <Stack   direction={['row','column']} border="2px solid" shadow={'lg'} borderRadius='lg' p="4" justifyContent={['space-between','center']} alignItems="center" transition="0.3s" w={["80","40"]} h='auto'
        css={{
          "&:hover": {
            transform: "scale(1.1)"
          }
        }} >
        <Image src={imgSrc} h="20" w="20" objectFit="cover" />
        <Heading size="md" noOfLines={1}>Rank : {rank}</Heading>
        <Text noOfLines={1}>{name}</Text>
      </Stack>
    </a>
  )
}


export default Exchanges
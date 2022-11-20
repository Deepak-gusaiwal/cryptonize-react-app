import React ,{ useState,useEffect } from 'react'
import { Box, Container,Button, RadioGroup, HStack,Radio, VStack, Text, Image, Stat, StatLabel, StatNumber, StatHelpText,StatArrow, Badge, Progress } from '@chakra-ui/react'
import Loader from './Loader';
import axios from 'axios';
import { server } from '../index';
import {useParams} from 'react-router-dom'
import AlertComponent from './AlertComponent'
import { AiOutlineReload } from 'react-icons/ai'
import CoinChart from './CoinChart';

const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState('inr')
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"
  const params = useParams();
  const coinId = params.id;
  const btns = ["24h","7d","14d","30d","60d","365d","max"]
 

  const [days,setDays]=useState("24h");
  const [chartArray,setChartArray]=useState([]);
 useEffect(() => {
  const fetchCoinDetails = async()=>{
    try {
      const { data } = await axios.get(`${server}/coins/${coinId}`)
      const { data:chartData } = await axios.get(`${server}/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`)
      if (!data) {
        setError(true);
      } else {
        setCoin(data)
        setChartArray(chartData.prices)
        setLoading(false);
        setError(false)
      }
    } catch (error) {
      setError(true);
      setLoading(false)
      setCoin({})
    }
  }
  
  fetchCoinDetails();
}, [coinId,currency,days])
const switchChartStats =(item)=>{
  if(item === "24h" && days !== "24h"){
    setDays("24h");
     setLoading(true);
  }else if(item === "7d" && days !== "7d"){
    setDays("7d");
    setLoading(true);
  }else if(item === "14d" && days !== "14d"){
    setDays("14d");
     setLoading(true);
  }else if(item === "30d" && days !== "30d"){
    setDays("30d");
     setLoading(true);
  }else if(item === "60d" && days !== "60d"){
    setDays("60d");
     setLoading(true);
  }else if(item === "365d" && days !== "365d"){
    setDays("365d");
     setLoading(true);
  }else if(item === "max" && days !== "max"){
    setDays("max");
     setLoading(true);
  }
}

  return (
    <Container maxW='container.xl'>
       {
        error ? <>
          <AlertComponent title={"internal server Error"} msg={"no coins data has been fetched"} type="error" />
          <Button left="50%" variant="solid" borderRadius="50%" p="1" m="1" colorScheme="linkedin" onClick={() => { window.location.reload(true) }}> <AiOutlineReload size="1.5rem" cursor="pointer" /></Button>
        </> : ""
      }
      {
        loading ? <Loader/> : (
          <>
          <Box w="full" borderWidth={4}>
          <CoinChart arr={chartArray} days={days} currency={currencySymbol} />
          </Box>

          <HStack p="4" overflowX="auto" css={{
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
            btns.map((item)=>{
             return (<Button key={item} onClick={()=>{switchChartStats(item)}}>{item}</Button>)
            })
          }
          </HStack>



          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={4}>
              <Radio value="inr">Rupee</Radio>
              <Radio value="usd">Dollar</Radio>
              <Radio value="eur">Euro</Radio>
            </HStack>
          </RadioGroup>
          <VStack spacing={"4"} p={['4','8','16']} alignItems="flex-start">
          <Text fontSize={"small"} alignSelf="center">Last updated on {Date(coin.market_data.last_updated).split("G")[0]}</Text>
          <Image src={coin.image.large} h="16" w="16" objectFit="contain" />

          <Stat>
            <StatLabel>{coin.name}</StatLabel>
            <StatNumber> {currencySymbol} {coin.market_data.current_price[currency]}</StatNumber>
            <StatHelpText>
              <StatArrow type={coin.market_data.market_cap_change_percentage_24h < 0 ? "decrease" : "increase"}/>
              {coin.market_data.market_cap_change_percentage_24h}
            </StatHelpText>
          </Stat>

          <Badge fontSize="xl" variant='solid' colorScheme='linkedin' >{`#${coin.market_cap_rank}`}</Badge>
          <CustomBar high = {`${currencySymbol} ${coin.market_data.high_24h[currency]}` } low={`${currencySymbol} ${coin.market_data.low_24h[currency]}` } />

          <Box w="full" p="4">
          <Item title = {"Max Supply"} value={coin.market_data.max_supply}/>
          <Item title = {"Circulating Supply"} value={coin.market_data.circulating_supply}/>
          <Item title = {"Market Cap"} value={`${currencySymbol} ${coin.market_data.market_cap[currency]}`}/>
          <Item title = {"All Time High"} value={`${currencySymbol} ${coin.market_data.ath[currency]}`}/>
          <Item title = {"All Time Low"} value={`${currencySymbol} ${coin.market_data.atl[currency]}`}/>
          </Box>
          </VStack>
          </>
        )
      }

    </Container>
  )
}

const CustomBar = ({high,low})=>{
  return(
    <VStack w="full">
      <Progress value={50} colorScheme="linkedin" w="full" />
      <HStack justifyContent={"space-between"} w="full">
      <Badge children={low} colorScheme="red" />
      <Text fontSize="sm">24hr Rage</Text>
      <Badge children={high} colorScheme="green" />
      </HStack>
    </VStack>
  )
}
const Item = ({title,value})=>{
  return(
   <HStack justifyContent="space-between" w="full" my="4" >
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>{title}</Text>
    <Text>{value === null ? "Na" : value}</Text>
   </HStack>
  )
}

export default CoinDetails
import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend )
const CoinChart = ({arr=[],currency,days}) => {
    const prices = []
    const date = []
  const data = {
    labels:date,
    datasets:[{
        label:`price in ${currency}`,
        data:prices,
        borderColor:"rgb(10, 102, 194)",
        backgroundColor:"rgba(10, 102, 194,0.5)",
    }]
}
  for(let i=0; i<arr.length; i++){
    prices.push(arr[i][1]);
    if(days === '24h'){
        date.push(new Date(arr[i][0]).toLocaleTimeString())
    }else{
        date.push(new Date(arr[i][0]).toLocaleDateString())
    }
  }

    return (
        <Line options={{
            responsive:true,
            
        }} data={data}/>
    )
}

export default CoinChart
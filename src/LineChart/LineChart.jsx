import React from 'react'
import "./linechart.scss"
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement
} from 'chart.js'
import {Line} from "react-chartjs-2";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement
)
const LineChart = () => {
  const data={
    labels:['April','May','June','July','August','September','October','November','December'],
    datasets:[
      {
        label:'Sales Overview',
        data:[50,10,310,220,500,260,400,230,500],
        backgroundColor: 'black',
        borderColor:'rgb(51, 189, 243)',
        tension:0.5,
        color:"gray"
      }
    ]
  }
  const options={

  }
  return (
    <div className='linechart'>
      <Line data={data} options={options} className='line' style={{width:"50%"}}/>
    </div>
  )
}
export default LineChart

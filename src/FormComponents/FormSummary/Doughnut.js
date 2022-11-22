import React from 'react'
import './Doughnut.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend);



const Doughnutchart = (prop)=>{

  const ElementData = Object.values(prop)[0];

  const ChartData = ElementData.map(element=>{
    return Number(element*100/ElementData[3]).toFixed(2)
  })

  const data = {
    labels: ['% Income ', '% Expense ', '% Investing '],
    datasets: [
      {
        label: 'id',
        data: [ChartData[0], ChartData[1], ChartData[2]],
        backgroundColor: [
          'rgb(67, 240, 148)',
          'rgb(240, 140, 130)',
          'rgb(195, 120, 250)',
        ],
        borderColor: [
          'green',
          'red',
          'rgb(157, 60, 157)',
        ],
        borderWidth: 3,
        hoverOffset: 1
      },
    ],
  };

  return(
      <div className="DoughnutSect">
        <Doughnut data={data} />
      </div>
  )
}

export default Doughnutchart
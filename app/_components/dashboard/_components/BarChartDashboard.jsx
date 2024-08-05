import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function BarChartDashboard({budgetList}) {
  return (
    <div className='border rounded-lg p-5'>
        <h2 className='font-bold text-lg'>Atividade Financeira</h2>
        <ResponsiveContainer width={'80%'} height={300}>
          <BarChart
             
              data={budgetList}
            margin={{
              top:7
            }}
          >
              <XAxis dataKey='name' />
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Bar dataKey='totalSpend' name="Total Gasto" stackId="a" fill='#15151e'/>
              <Bar dataKey='amount' name="Teto Orçamentário" stackId="a" fill='#8b898c'/>

          </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default BarChartDashboard
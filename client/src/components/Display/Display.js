import React from 'react'
import {RadialBarChart, RadialBar, Tooltip, Legend, PolarAngleAxis} from 'recharts'
import {Typography} from '@mui/material'
import { styled } from '@mui/material/styles'
import { ComponentTitle, ComponentHeading, ComponentSubHeading } from "../../styles/theme";

const width = 600
const height = 600
const data = [
    {
        name: 'Food',
        value: 80,
        totalBudget: 100,
        fill: '#8884d8',
    },
    {
        name: 'Fun',
        value: 50,
        totalBudget: 120,
        fill: '#82ca9d',
    },
]

const totalBudget = data.reduce((accumulator, currentValue, index, ) => accumulator + data[index].totalBudget,  0)
const totalSpent = data.reduce((accumulator, currentValue, index, ) => accumulator + data[index].value,  0)

// Calculate the percentage of the budget used for each category
data.forEach(item => {
    item.percentageUsed = Math.round((item.value / item.totalBudget) * 100)
})

export default function Display() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ComponentTitle variant="h4" component="h1">
                myBudgetPal
            </ComponentTitle>
            <ComponentHeading>
                Total: ${totalBudget}
            </ComponentHeading>
            <ComponentSubHeading>
                Spent: ${totalSpent}
            </ComponentSubHeading>

            <RadialBarChart
                width={width}
                height={height}
                cx={width / 2}
                cy={height / 2}
                innerRadius={120}
                outerRadius={240}
                barSize={60}
                data={data}
            >
                <RadialBar background dataKey="percentageUsed" label={{ position: 'insideStart', fill: '#fff', dataKey: 'value' }}/>
                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                <Tooltip />
                <Legend iconSize={30} layout="vertical" verticalAlign="middle" wrapperStyle={{ position: 'absolute', left: '500px', top: '0px' }} />
            </RadialBarChart>
        </div>
    )
}

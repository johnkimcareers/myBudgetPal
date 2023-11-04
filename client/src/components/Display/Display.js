import React from 'react'
import {RadialBarChart, RadialBar, Tooltip, Legend, PolarAngleAxis} from 'recharts'
import {Typography} from '@mui/material'
import { styled } from '@mui/material/styles'

const DashboardTitle = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.h4.fontSize,
    color: '#8884d8',
    marginBottom: theme.spacing(2),
    display: 'inline-block',
}))

const TotalBudget = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.h5.fontSize,
    color: '#82ca9d',
    marginBottom: theme.spacing(1),
    display: 'block',
}))

const AmountSpent = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    display: 'block',
}))

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

function RadialBudgetChart() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <DashboardTitle variant="h4" component="h1">
                myBudgetPal
            </DashboardTitle>
            <TotalBudget>
                Total: ${totalBudget}
            </TotalBudget>
            <AmountSpent>
                Spent: ${totalSpent}
            </AmountSpent>

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
                {/* Use maxAngle to depict the percentage of budget used */}
                <RadialBar background dataKey="percentageUsed" label={{ position: 'insideStart', fill: '#fff', dataKey: 'value' }}/>
                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                <Tooltip />
                <Legend iconSize={30} layout="vertical" verticalAlign="middle" wrapperStyle={{ position: 'absolute', left: '500px', top: '0px' }} />
            </RadialBarChart>
        </div>
    )
}

export default RadialBudgetChart

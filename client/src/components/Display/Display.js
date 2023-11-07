import React, {useState} from 'react'
import {RadialBarChart, RadialBar, Tooltip, Legend, PolarAngleAxis} from 'recharts'
import {Typography} from '@mui/material'
import { styled } from '@mui/material/styles'
import { ComponentTitle, ComponentHeading, ComponentSubHeading } from "../../styles/theme";
import {useDispatch, useSelector} from "react-redux";


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
        totalBudget: 100,
        fill: '#82ca9d',
    },
]


export default function Display() {
    const width = 600
    const height = 600

    const dispatch = useDispatch()

    let { expenses }  = useSelector((state) => state.expenses)

    const foodExpenses = expenses.filter(expense => expense.type === 'Food')
    const funExpenses = expenses.filter(expense => expense.type === 'Fun')
    const foodTotal = foodExpenses.reduce((accumulator, food) => accumulator + food.amount, 0)
    const funTotal = funExpenses.reduce((accumulator, fun) => accumulator + fun.amount, 0)

    data[0].value = foodTotal
    data[1].value = funTotal

    const totalBudget = data.reduce((accumulator, currentValue, index, ) => accumulator + data[index].totalBudget,  0)
    const totalSpent = data.reduce((accumulator, currentValue, index, ) => accumulator + data[index].value,  0)

    data.forEach(item => {
        item.percentageUsed = Math.round((item.value / item.totalBudget) * 100)
    })
    console.log(data)

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
                <PolarAngleAxis type="number" domain={[0,100]} angleAxisId={0} tick={false} />
                <PolarAngleAxis type="number" domain={[0,100]} angleAxisId={1} tick={false} />
                <RadialBar background dataKey="percentageUsed"  angleAxisId={0} data={[data[0]]} label={{ position: 'insideStart', fill: '#fff', dataKey: 'value' }}/>
                <RadialBar background dataKey="percentageUsed"  angleAxisId={1} data={[data[1]]} label={{ position: 'insideStart', fill: '#fff', dataKey: 'value' }}/>
                <Legend iconSize={30} layout="vertical" verticalAlign="middle" wrapperStyle={{ position: 'absolute', left: '500px', top: '0px' }} />
            </RadialBarChart>
        </div>
    )
}

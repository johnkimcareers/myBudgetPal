import * as React from 'react'
import { mockExpenses } from '../../mockdata/mockData'
import {useEffect, useState} from 'react'

export default function Budget() {
    const [expenses, setExpenses] = useState([])

    useEffect(() => {
        setExpenses(mockExpenses)
    }, mockExpenses)

    console.log(expenses)

    return (
        <div>
            Budget
        </div>
    )
}

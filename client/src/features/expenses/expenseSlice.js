import { createSlice } from '@reduxjs/toolkit'
import { mockExpenses, totals } from '../../mockdata/mockData'

const initialState = {
    expenses: mockExpenses,
    totals: totals
}

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: initialState,
    reducers: {
        addExpense: (state, action) => state.expenses.push(action.payload)
    }
})
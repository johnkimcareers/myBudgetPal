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
        getExpenses: (state, action) => state.expenses,
        addExpense: (state, action) => state.expenses.push(action.payload)
    }
})

export const { getExpenses, addExpense } = expenseSlice.actions

export default expenseSlice.reducer

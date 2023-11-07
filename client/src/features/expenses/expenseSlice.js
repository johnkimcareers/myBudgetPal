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
        addExpense: (state, action) => {state.expenses.push(action.payload)},
        deleteExpense: (state, action) => {
            state.expenses = state.expenses.filter(expense => expense.id !== action.payload)
        },
        updateExpense: (state, action) => {
            const { id, description, amount, type, date } = action.payload
            const existingExpense = state.expenses.find(expense => expense.id === id)
            if (existingExpense) {
                existingExpense.description = description
                existingExpense.amount = amount
                existingExpense.type = type
                existingExpense.date = date
            }
        }
    }
})

export const { addExpense, deleteExpense, updateExpense } = expenseSlice.actions

export default expenseSlice.reducer

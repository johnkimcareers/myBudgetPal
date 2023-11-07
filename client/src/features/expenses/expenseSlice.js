import { createSlice } from '@reduxjs/toolkit'
import { fetchExpensesAsync, addExpenseAsync, deleteExpenseAsync, updateExpenseAsync } from './expenseThunks'


const initialState = {
    expenses: [],
    totals: 0,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExpensesAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchExpensesAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.expenses = action.payload
            })
            .addCase(fetchExpensesAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addExpenseAsync.pending, (state) => {
                state.addStatus = 'loading'
            })
            .addCase(addExpenseAsync.fulfilled, (state, action) => {
                state.expenses.push(action.payload)
                state.addStatus = 'succeeded'
            })
            .addCase(addExpenseAsync.rejected, (state, action) => {
                state.addStatus = 'failed'
                state.error = action.error.message
            })
            .addCase(deleteExpenseAsync.pending, (state) => {
                state.deleteStatus = 'loading'
            })
            .addCase(deleteExpenseAsync.fulfilled, (state, action) => {
                state.expenses = state.expenses.filter(expense => expense.id !== action.payload)
                state.deleteStatus = 'succeeded'
            })
            .addCase(deleteExpenseAsync.rejected, (state, action) => {
                state.deleteStatus = 'failed'
                state.error = action.error.message
            })
            .addCase(updateExpenseAsync.pending, (state) => {
                state.updateStatus = 'loading'
            })
            .addCase(updateExpenseAsync.fulfilled, (state, action) => {
                const index = state.expenses.findIndex(expense => expense.id === action.payload.id)
                if (index !== -1) {
                    state.expenses[index] = action.payload
                }
                state.updateStatus = 'succeeded'
            })
            .addCase(updateExpenseAsync.rejected, (state, action) => {
                state.updateStatus = 'failed'
                state.error = action.error.message
            })
    },

})

export const { addExpense, deleteExpense, updateExpense } = expenseSlice.actions

export default expenseSlice.reducer

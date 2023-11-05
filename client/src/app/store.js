import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from '../features/expenses/expenseSlice'

export const store = configureStore({
    reducer: {
        expenses: expensesReducer
    }
})
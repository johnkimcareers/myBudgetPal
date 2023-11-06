import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from '../features/expenses/expenseSlice'
import dayReducer from '../features/day/daySlice'

export const store = configureStore({
    reducer: {
        expenses: expensesReducer,
        day: dayReducer
    }
})
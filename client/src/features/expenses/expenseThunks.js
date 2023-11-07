import { createAsyncThunk } from '@reduxjs/toolkit'
import { addExpense, deleteExpense, fetchExpenses, updateExpense } from '../../services/expenseService'

export const fetchExpensesAsync = createAsyncThunk(
    'expenses/fetchExpenses',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetchExpenses()
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const addExpenseAsync = createAsyncThunk(
    'expenses/addExpense',
    async (expenseData, { rejectWithValue }) => {
        try {
            const response = await addExpense(expenseData)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const deleteExpenseAsync = createAsyncThunk(
    'expenses/deleteExpense',
    async (expenseId, { rejectWithValue }) => {
        try {
            await deleteExpense(expenseId)
            return expenseId
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const updateExpenseAsync = createAsyncThunk(
    'expenses/updateExpense',
    async ( {expenseId, expenseData} , { rejectWithValue }) => {
        try {

            const response = await updateExpense(expenseId, expenseData)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

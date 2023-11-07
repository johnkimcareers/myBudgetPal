
import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/api/expenses/'

export const fetchExpenses = async () => {
    return await axios.get(API_BASE_URL)
}

export const addExpense = async (expenseData) => {
    return await axios.post(API_BASE_URL, expenseData)
}

export const deleteExpense = async (expenseId) => {
    // code to delete expense
    return await axios.delete(`${API_BASE_URL}/${expenseId}`)
}

export const updateExpense = async (expenseId, expenseData) => {
    // code to update expense
    return await axios.put(`${API_BASE_URL}/${expenseId}`, expenseData)
}

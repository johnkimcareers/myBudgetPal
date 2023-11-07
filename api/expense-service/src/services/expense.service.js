// expense.service.js
const Expense = require('../models/expense.model')

const createExpense = async (data) => {
    const expense = new Expense(data)
    await expense.save()
    return expense
}

const getAllExpenses = async () => {
    const expenses = await Expense.find()
    return expenses
}

const getExpenseById = async (id) => {
    const expense = await Expense.findOne({id: id})
    return expense
}

const updateExpense = async (id, updateData) => {
    const expense = await Expense.findOneAndUpdate({id: id}, updateData, { new: true })
    return expense
}

const deleteExpense = async (id) => {
    await Expense.findOneAndDelete({id: id})
    return
}

module.exports = {
    createExpense,
    getAllExpenses,
    getExpenseById,
    updateExpense,
    deleteExpense
}

const express = require('express')
const router = express.Router()
const expenseService = require('../services/expense.service')

router.post('/', async (req, res) => {
    try {
        const expense = await expenseService.createExpense(req.body)
        res.status(201).json(expense)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const expenses = await expenseService.getAllExpenses()
        res.json(expenses)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const expense = await expenseService.getExpenseById(req.params.id)
        if (expense) {
            res.json(expense)
        } else {
            res.status(404).json({ message: 'Expense not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedExpense = await expenseService.updateExpense(req.params.id, req.body)
        res.json(updatedExpense)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await expenseService.deleteExpense(req.params.id)
        res.status(204).end()
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router

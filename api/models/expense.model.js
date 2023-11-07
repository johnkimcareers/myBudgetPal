const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    description: String,
    amount: Number,
    type: String,
    date: Date,
    id: Number
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expenseRoutes = require('./routes/expense.routes')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())

const url = process.env.MONGODB_URI

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB')

    // Setup routes
    // app.use('/api/expenses', expenseRoutes)

    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    });
}).catch(err => {
    console.error('MongoDB connection error:', err)
});

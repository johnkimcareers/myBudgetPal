const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expenseRoutes = require('./expense-service/src/routes/expense.routes')
const cors = require('cors');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const app = express()
app.use(cors())
app.use(bodyParser.json())

const url = process.env.MONGODB_URI

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB')

    app.use('/api/expenses', expenseRoutes)

    const PORT = process.env.PORT || 4000
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    });
}).catch(err => {
    console.error('MongoDB connection error:', err)
});

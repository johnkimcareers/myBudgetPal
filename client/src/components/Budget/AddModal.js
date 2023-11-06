import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { ComponentTitle} from '../../styles/theme'
import {addExpense} from "../../features/expenses/expenseSlice";
import {useDispatch, useSelector} from "react-redux";


const StyledBox = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    backgroundColor: 'white',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})


export default function AddModal({isOpen, onClose, type, date}) {
    const dispatch = useDispatch()
    const { expenses } = useSelector(state => state.expenses)
    const newId = expenses.reduce((max, obj) => obj.id > max ? obj.id : max, expenses[0].id) + 1

    const [expenseName, setExpenseName] = useState('')
    const [expenseAmount, setExpenseAmount] = useState(0)

    const handleNameChange = (e) => {
        setExpenseName(e.target.value)
    }

    const handleAmountChange = (e) => {
        const number = parseFloat(e.target.value)
        setExpenseAmount(number)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const expenseData = {
            id: newId,
            description: expenseName,
            amount: parseFloat(expenseAmount),
            type: type,
            date: date
        }
        dispatch(addExpense(expenseData))
        onClose()
    }
    return (
        <div>
            <Modal
                open={isOpen}
                onClose={onClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <StyledBox>
                    <ComponentTitle>
                        Add New {type} Expense
                    </ComponentTitle>
                    <Box
                        component='form'
                        noValidate
                        autoComplete='off'
                        onSubmit={handleSubmit}
                    >
                        {/* Form Inputs */}
                        <TextField
                            label='Expense Name'
                            value={expenseName}
                            onChange={handleNameChange}
                            fullWidth
                            margin='normal'
                        />
                        <TextField
                            label='Amount'
                            value={expenseAmount}
                            onChange={handleAmountChange}
                            fullWidth
                            margin='normal'
                            type='number'
                        />

                        <Button type='submit' variant='contained'>
                            Add Expense
                        </Button>
                    </Box>
                </StyledBox>
            </Modal>
        </div>
    )
}
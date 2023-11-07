import React, {useEffect, useState} from 'react'
import { Modal, Box, Typography, TextField, Button } from '@mui/material'
import { styled } from '@mui/system'
import { ComponentTitle} from '../../styles/theme'
import {addExpense, updateExpense} from "../../features/expenses/expenseSlice"
import {useDispatch, useSelector} from "react-redux"
import {updateExpenseAsync} from "../../features/expenses/expenseThunks"


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


export default function EditModal({isOpen, onClose, selectedExpense}) {
    const dispatch = useDispatch()
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        if(selectedExpense) {
            setDescription(selectedExpense.description)
            setAmount(selectedExpense.amount)
        }
    }, [isOpen, selectedExpense])

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleAmountChange = (e) => {
        const number = parseFloat(e.target.value)
        setAmount(number)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const expenseData = {
            ...selectedExpense,
            description: description,
            amount: parseFloat(amount),
        }
        const expenseId = expenseData.id
        dispatch(updateExpenseAsync({expenseId, expenseData}))
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
                        Edit Expense
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
                            value={description}
                            onChange={handleDescriptionChange}
                            fullWidth
                            margin='normal'
                        />
                        <TextField
                            label='Amount'
                            value={amount}
                            onChange={handleAmountChange}
                            fullWidth
                            margin='normal'
                            type='number'
                        />

                        <Button type='submit' variant='contained'>
                            Edit Expense
                        </Button>
                    </Box>
                </StyledBox>
            </Modal>
        </div>
    )
}
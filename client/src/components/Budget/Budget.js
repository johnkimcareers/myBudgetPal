import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getExpenses, addExpense} from '../../features/expenses/expenseSlice'
import {useEffect, useState} from 'react'
import {Box, dividerClasses, List, ListItem, ListItemText, Paper, paperClasses, Typography} from '@mui/material'
import {styled} from '@mui/system'
import { ComponentTitle, ComponentHeading, ComponentSubHeading} from '../../styles/theme'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import AddModal from "./AddModal";

const StyledList = styled(List)({
    component: 'div',
    ariaLabel: 'mailbox folders',
    width: '100%',
    maxHeight: '25%',
    overflowY: 'auto',
    overflowX: 'hidden'
})

const StyledPaper = styled(Paper)({
    margin: '10px',
    borderRadius: '4px',
    width: '100%',
})

const StyledListItem = styled(ListItem)({
    backgroundColor: '#ffffff',
    margin: '8px',
    borderRadius: '4px',
    width: '100%'
})

const StyledListItemText = styled(ListItemText)({
    '& .MuiListItemText-primary': {
        fontWeight: 'bold', // This will apply the bold font weight.
    },
    width: '100%'
})

export default function Budget() {
    const dispatch = useDispatch()

    const [isAddModalOpen, setAddModalOpen] = useState(false)
    const [isEditModalOpen, setEditModalOpen] = useState(false)
    const [currentExpenseForEdit, setCurrentExpenseForEdit] = useState(null)

    let { expenses } = useSelector((state) => state.expenses)

    // const date = new Date().toISOString().split('T')[0]
    const date = '2023-11-03'
    expenses = expenses.filter(expense => {
        return expense.date === date
    })
    const foodExpenses = expenses.filter(expense => expense.type === 'Food')
    const funExpenses = expenses.filter(expense => expense.type === 'Fun')
    const foodTotal = foodExpenses.reduce((accumulator, food) => accumulator + food.amount, 0).toFixed(2)
    const funTotal = funExpenses.reduce((accumulator, fun) => accumulator + fun.amount, 0).toFixed(2)

    useEffect(() => {
        dispatch(getExpenses)
    }, [dispatch])

    const handleAddModalToggle = () => {
        setAddModalOpen(!isAddModalOpen)
        console.log(isAddModalOpen)
    }
    // const openEditModal = (expense) => {
    //     setCurrentExpenseForEdit(expense)
    //     setEditModalOpen(true)
    // };
    //
    // const closeEditModal = () => {
    //     setCurrentExpenseForEdit(null)
    //     setEditModalOpen(false)
    // };

    return (
        <>
            <ComponentTitle>Budget</ComponentTitle>
            <ComponentHeading>Food</ComponentHeading>
            <ExpenseList expenses={foodExpenses}/>
            <AddButton type='Food' onClick={handleAddModalToggle}/>
            <AddModal isOpen={isAddModalOpen} onClose={handleAddModalToggle} type='Food'></AddModal>
            <ComponentSubHeading>Total: ${foodTotal}</ComponentSubHeading>
            <ComponentHeading>Fun</ComponentHeading>
            <ExpenseList expenses={funExpenses}/>
            <AddButton type='Fun'/>
            <ComponentSubHeading>Total: ${funTotal}</ComponentSubHeading>
        </>
    )
}

const ExpenseList = ({expenses}) => {
    const handleEdit = (expense) => {
        console.log(expense)
    }

    const handleDelete = (expense) => {

    }


    return (
        <StyledList>
            {expenses.map(expense => {
                return (
                    <StyledPaper elevation={3}>
                        <StyledListItem key={expense.id} elevation={3} secondaryAction={
                            <>
                                <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(expense)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(expense)}>
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        }>
                            <StyledListItemText
                                primary={expense.description}
                                secondary={`$${expense.amount.toFixed(2)} - ${expense.date}`}
                            />
                        </StyledListItem>
                    </StyledPaper>
                    )
            })}
        </StyledList>
        )
}

const AddButton = ({type, onClick}) => {

    return (
        <div>
            <IconButton aria-label='add' onClick={onClick}>
                <AddCircleOutlineIcon />
            </IconButton>
        </div>
    )
}
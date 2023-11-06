import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import { ComponentTitle, ComponentHeading, ComponentSubHeading} from '../../styles/theme'


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


export default function AddModal({isOpen, onClose, type}) {
    const date = new Date().toISOString().split('T')[0]

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
                        onSubmit={(event) => {
                            event.preventDefault();
                            // Extract form data and perform your 'add' action here
                            // You can use a new state to handle form inputs
                             // Close the modal upon submission
                        }}
                    >
                        {/* Form Inputs */}
                        <TextField
                            label='Expense Name'
                            fullWidth
                            margin='normal'
                        />
                        <TextField
                            label='Amount'
                            type='number'
                            fullWidth
                            margin='normal'
                        />
                        {/* Add other form fields as needed */}

                        <Button type='submit' variant='contained'>
                            Add Expense
                        </Button>
                    </Box>
                </StyledBox>
            </Modal>
        </div>
    )
}
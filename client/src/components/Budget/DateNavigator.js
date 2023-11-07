import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { setDay } from '../../features/day/daySlice'

const DateNavigator = () => {
    const dispatch = useDispatch();
    const currentDate = useSelector((state) => state.day);
    const currentDateObj = new Date(currentDate);

    const handlePrevDay = () => {
        const prevDay = new Date(currentDateObj.setDate(currentDateObj.getDate() - 1)).toISOString().split('T')[0];
        dispatch(setDay(prevDay));
    };

    const handleNextDay = () => {
        const nextDay = new Date(currentDateObj.setDate(currentDateObj.getDate() + 1)).toISOString().split('T')[0];
        dispatch(setDay(nextDay));
    };

    const formatDate = (date) => {
        return date;
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handlePrevDay}>
                <ArrowLeftIcon />
            </IconButton>
            <span>{formatDate(currentDate)}</span>
            <IconButton onClick={handleNextDay}>
                <ArrowRightIcon />
            </IconButton>
        </div>
    )
}

export default DateNavigator

import { createSlice } from '@reduxjs/toolkit'
const daySlice = createSlice({
    name: 'day',
    initialState: new Date().toISOString().split('T')[0],
    reducers: {
        setDay: (state, action) => action.payload
    }
})

export const { setDay } = daySlice.actions
export default daySlice.reducer
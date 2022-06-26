import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        add: (state, action) => {
            return [...state, action.payload]
        },
        rem: (state, action) => {
            // console.log()
            return [...state.filter((sat) => sat.name != action.payload.name)]
        }
    }

})

export const { add, rem } = userSlice.actions
export default userSlice.reducer
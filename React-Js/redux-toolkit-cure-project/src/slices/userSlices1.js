import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    isEdit: false,
    editIndex: null
}
export const userSlices1 = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.users.splice(action.payload, 1)
        },
        eidtUser: (state, action) => {
            state.isEdit = action.payload.isEdit;
            state.editIndex = action.payload.index
        },
        updateUser: (state, action) => {
            state.users[action.payload.index] = action.payload.data;
            state.isEdit = action.payload.isEdit;
        }
    }
})

// export const actions = userSlices1.actions 
export const { addUser, deleteUser, updateUser, eidtUser } = userSlices1.actions
export default userSlices1.reducer
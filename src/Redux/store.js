import {createSlice} from '@reduxjs/toolkit';

const store = createSlice({
    name: 'redux-store',
    initialState: {name: ''},
    reducers: {
        save: (state,action) => {
            state.name = action.payload;
        }
    }
    
})

export const {save} = store.actions;
export default store.reducer;
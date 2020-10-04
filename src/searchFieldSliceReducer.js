import { createSlice } from '@reduxjs/toolkit'

export const searchFeildSlice = createSlice({

    name: 'searchFieldText',
    initialState: {
        text: ""
    }, 
    reducers : {
        searchFiledValueChanged : (state,action) => {
            state.text = action.payload
        }
    }

})

export const {searchFiledValueChanged} = searchFeildSlice.actions
export default searchFeildSlice.reducer
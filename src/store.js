import { configureStore } from '@reduxjs/toolkit'
import searchFieldTextReducer from './searchFieldSliceReducer'


export default configureStore({
    reducer: {
      text: searchFieldTextReducer
    }
  })
import { configureStore } from '@reduxjs/toolkit'
import {todoReducer} from './config'
import todoSlice from './features/todo.slice'


export const store = configureStore({
    reducer: {
        todo:todoSlice,
    }
  });
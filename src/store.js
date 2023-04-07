import { configureStore } from '@reduxjs/toolkit';
import formReducer from './Slices/FormSlice'
import counterReducer from './Slices/counterReducer'


export const store = configureStore({
  reducer: {
    form:formReducer,
count:counterReducer
  },
});

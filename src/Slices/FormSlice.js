import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
      // Use the PayloadAction type to declare the contents of `action.payload`
      postdata: (state, action) => {
       
        state.data = action.payload;
        console.log(state.data )
      },
   
   
  },

});
export const { postdata } = formSlice.actions;

export const selectFormData = (state) => state.form.data;

export default formSlice.reducer;

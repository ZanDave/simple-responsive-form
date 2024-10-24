import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    fullName: '',
    email: '',
    phone: '',
    age: '',
    occupation: '',
    address: ''
  },
  errors: {}
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.errors = {};
    }
  }
});

export const { updateField, setErrors, resetForm } = formSlice.actions;
export default formSlice.reducer;
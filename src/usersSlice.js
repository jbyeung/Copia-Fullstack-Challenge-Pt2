import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getAllUsers = createAsyncThunk(
  "/getAllUsers",
    async (thunkAPI) => {

      const response = await fetch('http://127.0.0.1:5000/getAllUsers')
      const data = await response.json();
      return data
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.loading = true
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.entities = payload
    },
    [getAllUsers.rejected]: (state) => {
      state.loading = false
    },


  }
})

export default usersSlice.reducer

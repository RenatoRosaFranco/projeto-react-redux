import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    id: 1,
    name: 'Renato Franco',
    email: 'renato_ny@live.com',
    address: null
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
});

export default userSlice.reducer;
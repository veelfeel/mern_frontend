import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { getAuthFromLS } from '../../utils/localStorage';
import { fetchAuth, fetchAuthMe, fetchRegister } from './asyncThunk';
import { AuthState, AuthData, Status, Auth } from './types';

const initialState: AuthState = {
  data: null,
  status: Status.LOADING,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.data = null;
      window.localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.pending, (state) => {
      state.data = null;
      state.status = Status.LOADING;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.LOADED;
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.data = null;
      state.status = Status.ERROR;
    });
    builder.addCase(fetchAuth.pending, (state) => {
      state.data = null;
      state.status = Status.LOADING;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.LOADED;
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.data = null;
      state.status = Status.ERROR;
    });
    builder.addCase(fetchAuthMe.pending, (state) => {
      state.data = null;
      state.status = Status.LOADING;
    });
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.LOADED;
    });
    builder.addCase(fetchAuthMe.rejected, (state) => {
      state.data = null;
      state.status = Status.ERROR;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

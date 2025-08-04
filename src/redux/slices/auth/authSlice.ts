import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  token: string | null;
  user: Record<string, any> | null;
  isAuthenticated?: boolean;
}

const initialState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  reducerPath: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token as string);
    },
    logout: state => {
      state.token = null;
    },
  },
  // extraReducers: builder => {
  //     builder.addMatcher(
  //         authApi.endpoints.login.matchFulfilled,
  //         (state, { payload }) => {
  //             state.token = payload.token; // <-- Set token here automatically on success
  //         }
  //     );
  //     builder.addMatcher(
  //         authApi.endpoints.getProfile.matchFulfilled,
  //         (state, { payload }) => {
  //             state.user = payload;
  //         }
  //     );
  // },
});

export const { setCredentials, logout } = authSlice.actions;
const authSliceReducer = authSlice.reducer;
export default authSliceReducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export type userState = {
  user: null | string
}

export const initialState: userState = {
  user: null
}
export const userSlice = createSlice({
  name: "user",
  initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		}
	}
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;

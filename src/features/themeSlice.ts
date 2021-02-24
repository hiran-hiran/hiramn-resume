import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export type themeState = {
  isDark: boolean
}

export const initialState: themeState = {
  isDark: false
}
export const themeSlice = createSlice({
  name: "theme",
  initialState,
	reducers: {
		isDark: (state) => {
			state.isDark = !state.isDark
		}
	}
});

export const { isDark } = themeSlice.actions;
export const selectTheme = (state: any) => state.theme.isDark;
export default themeSlice.reducer;

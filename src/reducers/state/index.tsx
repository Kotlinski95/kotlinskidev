import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {getCookie} from '../../services'
import type { RootState } from '../../store'

// Define a type for the slice state
interface pageState {
  page: string,
  theme: string,
  language: string,
  mobile: boolean
}

// Define the initial state using that type
const initialState: pageState = {
  page: "Home",
  theme: getCookie("theme") ? getCookie("theme") : "Dark",
  language: getCookie("language") ? getCookie("language") : "English",
  mobile: false,
} as pageState

export const counterSlice = createSlice({
  name: 'pageState',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
    setMobile: (state, action: PayloadAction<boolean>) => {
      state.mobile = action.payload;
    },
  },
})

export const { setTheme, setLanguage, setPage, setMobile } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectedPage = (state: RootState) => state.pageState.page;
export const selectedTheme = (state: RootState) => state.pageState.theme;
export const selectedLanguage = (state: RootState) => state.pageState.language;
export const selectedMobile = (state: RootState) => state.pageState.mobile;
export const counterReducer = counterSlice.reducer;
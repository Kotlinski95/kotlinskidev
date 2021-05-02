import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface pageState {
  page: string,
  theme: string,
  language: string
}

// Define the initial state using that type
const initialState: pageState = {
  page: "Home",
  theme: "Dark",
  language: "English"
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
  },
})

export const { setTheme, setLanguage, setPage } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectedPage = (state: RootState) => state.pageState.page
export const selectedTheme = (state: RootState) => state.pageState.theme
export const selectedLanguage = (state: RootState) => state.pageState.language

export default counterSlice.reducer
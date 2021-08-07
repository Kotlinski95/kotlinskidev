import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface menuState {
  menuOpen: string,
}

// Define the initial state using that type
const initialState: menuState = {
  menuOpen: "false"
} as menuState

export const menuSlice = createSlice({
  name: 'menuState',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<string>) => {
      state.menuOpen = action.payload;
    },
  },
})

export const { setMenu} = menuSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectedMenu = (state: RootState) => state.menuState.menuOpen;
export const menuReducer = menuSlice.reducer;
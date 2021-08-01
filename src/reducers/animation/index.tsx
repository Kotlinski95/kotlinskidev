import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface animationState {
  cursor: string,
}

// Define the initial state using that type
const initialState: animationState = {
    cursor: "false"
} as animationState

export const animationSlice = createSlice({
  name: 'animationState',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCursor: (state, action: PayloadAction<string>) => {
      state.cursor = action.payload;
    },
  },
})

export const { setCursor} = animationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectedCursor = (state: RootState) => state.animationState.cursor;
export const animationReducer = animationSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface notificationState {
  notificationOpen: string,
}

// Define the initial state using that type
const initialState: notificationState = {
    notificationOpen: "false"
} as notificationState

export const notificationSlice = createSlice({
  name: 'notificationState',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMenuNotification: (state, action: PayloadAction<string>) => {
      state.notificationOpen = action.payload;
    },
  },
})

export const { setMenuNotification} = notificationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectedNotification = (state: RootState) => state.notificationState.notificationOpen;
export const notificationReducer = notificationSlice.reducer;
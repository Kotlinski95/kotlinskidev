
import { configureStore } from '@reduxjs/toolkit'
import {counterReducer} from '../reducers/state'
import {menuReducer} from '../reducers/menu'

export const store = configureStore({
    reducer: {
        pageState: counterReducer,
        menuState: menuReducer,
    },
  })
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch

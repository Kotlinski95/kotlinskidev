
import { configureStore } from '@reduxjs/toolkit'
import {counterReducer} from '../reducers/state'
import {menuReducer} from '../reducers/menu'
import {notificationReducer} from '../reducers/notification'

export const store = configureStore({
    reducer: {
        pageState: counterReducer,
        menuState: menuReducer,
        notificationState: notificationReducer
    },
  })
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch

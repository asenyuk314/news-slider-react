import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { newsReducer } from 'src/features/news'

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

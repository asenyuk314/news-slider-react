import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { NewsItem, NewsState } from './news-interfaces'

const INITIAL_STATE: NewsState = {
  allNews: [],
  bookmarkedIds: []
}

const newsSlice = createSlice({
  name: 'news',
  initialState: INITIAL_STATE,
  reducers: {
    setNews: (state, { payload }: PayloadAction<NewsItem[]>) => {
      state.allNews = payload
    },
    toggleBookmark: (state, { payload }: PayloadAction<number>) => {
      if (state.bookmarkedIds.includes(payload)) {
        state.bookmarkedIds = state.bookmarkedIds.filter(item => item !== payload)
      } else {
        state.bookmarkedIds.push(payload)
      }
    }
  }
})

export const {
  actions: { setNews, toggleBookmark },
  reducer: newsReducer,
} = newsSlice

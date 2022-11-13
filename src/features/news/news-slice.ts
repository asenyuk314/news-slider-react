import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { NewsItem, NewsState } from './news-interfaces'

const INITIAL_STATE: NewsState = {
  allNews: [],
}

const newsSlice = createSlice({
  name: 'news',
  initialState: INITIAL_STATE,
  reducers: {
    setNews: (state, { payload }: PayloadAction<NewsItem[]>) => {
      state.allNews = payload
    },
    toggleBookmark: (state, { payload }: PayloadAction<number>) => {
      const item = state.allNews.find(item => item.id === payload)!
      item.isBookmarked = !item.isBookmarked
    }
  }
})

export const {
  actions: { setNews, toggleBookmark },
  reducer: newsReducer,
} = newsSlice

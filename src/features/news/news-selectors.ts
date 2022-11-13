import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'src/app/store'

const getNewsState = (state: RootState) => state.news

const getAllNews = createSelector(
  getNewsState,
  news => news.allNews
)

export const getNewsForTable = createSelector(
  getAllNews,
  allNews => allNews.slice(1)
)

export const getFirstNews = createSelector(
  getAllNews,
  allNews => allNews.length ? allNews[0] : null
)

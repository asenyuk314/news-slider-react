import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'src/app/store'
import { NewsItem } from './news-interfaces'

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

const getAllNewsById = createSelector(
  getAllNews,
  allNews => allNews.reduce<Record<number, NewsItem>>((accumulator, current) => ({
    ...accumulator,
    [current.id]: current
  }), {})
)  

export const getBookmarkedIds = createSelector(
  getNewsState,
  news => news.bookmarkedIds
)

export const getBookmarkedNews = createSelector(
  [getBookmarkedIds, getAllNewsById],
  (bookmarkedIds, allNewsById) => bookmarkedIds.map(item => allNewsById[item])
)

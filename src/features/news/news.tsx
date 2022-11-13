import React, { memo, useEffect, useState } from 'react'
import cn from 'classnames'

import { useAppDispatch, useAppSelector } from 'src/app/hooks'
import { Card, Pagination } from './components'
import { requestNews } from './news-actions'
import { NEWS_PER_PAGE } from './news-constants'
import { NewsItem } from './news-interfaces'
import { getBookmarkedNews, getFirstNews, getNewsForTable } from './news-selectors'
import styles from './news.module.scss'

export const News = memo(() => {
  const [shownNews, setShownNews] = useState<NewsItem[]>([])
  const [choosenNews, setChoosenNews] = useState<NewsItem[]>([])
  const [currentTab, setCurrentTab] = useState<'news' | 'bookmarks'>('news')
  const dispatch = useAppDispatch()
  const allNews = useAppSelector(getNewsForTable)
  const firstNews = useAppSelector(getFirstNews)
  const bookmarkedNews = useAppSelector(getBookmarkedNews)
  console.log({bookmarkedNews, choosenNews, shownNews})

  useEffect(() => {
    dispatch(requestNews())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setChoosenNews(allNews)
  }, [allNews])

  useEffect(() => {
    onPaginateHandler(1)
  }, [choosenNews]) // eslint-disable-line react-hooks/exhaustive-deps

  const onPaginateHandler = (pageNumber: number) => {
    setShownNews(choosenNews.slice((pageNumber - 1) * NEWS_PER_PAGE, pageNumber * NEWS_PER_PAGE))
  }

  const onNewsTabClickHandler = () => {
    setCurrentTab('news')
    setChoosenNews(allNews)
  }

  const onBookmarksClickHandler = () => {
    setCurrentTab('bookmarks')
    setChoosenNews(bookmarkedNews)
  }

  return (
    <div className={styles.News}>
      <div className={styles.Header}>
        <button
          className={cn(styles.TabButton, { [styles.Active]: currentTab === 'news' })}
          onClick={onNewsTabClickHandler}
        >
          News
        </button>
        <button
          className={cn(styles.TabButton, { [styles.Active]: currentTab === 'bookmarks' })}
          onClick={onBookmarksClickHandler}
        >
          Bookmarks
        </button>
      </div>
      <div className={styles.Body}>
        {firstNews && (
          <div className={styles.FirstCardContainer}>
            <Card {...firstNews} isPinned />
          </div>
        )}
        <div>
          <div className={styles.CardsContainer}>
            {shownNews.map(item => (
              <Card key={item.id} {...item} />
            ))}
          </div>
          <Pagination
            itemsPerPage={NEWS_PER_PAGE}
            totalItems={choosenNews.length}
            onPaginate={onPaginateHandler}
          />
        </div>
      </div>
    </div>
  )
})

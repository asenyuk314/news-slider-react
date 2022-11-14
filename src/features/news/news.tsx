import React, { memo, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from 'src/app/hooks'
import { Card, Pagination, StyledInput, Tabs, useInput } from './components'
import { requestNews } from './news-actions'
import { NEWS_PER_PAGE } from './news-constants'
import { getFirstNews, getNewsForTable } from './news-selectors'
import styles from './news.module.scss'

export const News = memo(() => {
  const [currentTab, setCurrentTab] = useState('News')
  const [currentPage, setCurrentPage] = useState(1)
  const search = useInput()
  const dispatch = useAppDispatch()
  const allNews = useAppSelector(getNewsForTable)
  const firstNews = useAppSelector(getFirstNews)

  useEffect(() => {
    dispatch(requestNews())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setCurrentPage(1)
  }, [currentTab])

  const shownNews = currentTab === 'News'
    ? allNews.filter(item =>
        item.headline.toLowerCase().includes(search.value.toLowerCase())
        || item.summary.toLowerCase().includes(search.value.toLowerCase())
      )
    : allNews.filter(item => item.isBookmarked && (
        item.headline.toLowerCase().includes(search.value.toLowerCase())
        || item.summary.toLowerCase().includes(search.value.toLowerCase())
    ))

  useEffect(() => {
    if (currentPage > 1 && (currentPage - 1) * NEWS_PER_PAGE >= shownNews.length) {
      const nextPage = Math.max(Math.ceil(shownNews.length / NEWS_PER_PAGE), 1)
      setCurrentPage(nextPage)
    }
  }, [shownNews.length]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.News}>
      <div className={styles.Header}>
        <Tabs
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tabsArray={['News', 'Bookmarks']}
        />
        <StyledInput {...search} placeholder='Search' />
      </div>
      <div className={styles.Body}>
        {firstNews && (
          <div className={styles.FirstCardContainer}>
            <Card {...firstNews} isPinned />
          </div>
        )}
        <div className={styles.CardsContainer}>
          {shownNews.slice((currentPage - 1) * NEWS_PER_PAGE, currentPage * NEWS_PER_PAGE).map(item => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className={styles.Footer}>
        <Pagination
          itemsPerPage={NEWS_PER_PAGE}
          totalItems={shownNews.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
})

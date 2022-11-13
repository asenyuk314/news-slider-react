import React, { memo } from 'react'

import { useAppDispatch, useAppSelector } from 'src/app/hooks'
import { toggleBookmark } from 'src/features/news/news-slice'
import { getBookmarkedIds } from 'src/features/news/news-selectors'
import { Icon } from '../icon'
import { CardProps } from './card-interfaces'
import { dateParser } from './card-utils'
import styles from './card.module.scss'

export const Card = memo(({
  datetime,
  headline,
  id,
  image,
  isPinned,
  related,
  source,
  summary,
  url
}: CardProps) => {
  const dispatch = useAppDispatch()
  const bookmarkedIds = useAppSelector(getBookmarkedIds)
  const isBookmarked = bookmarkedIds.includes(id)
  const date = dateParser(datetime)

  const onBookmarkClickHandler = () => {
    dispatch(toggleBookmark(id))
  }

  return (
    <div className={styles.Card} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.Header}>
        <div className={styles.Related}>{related}</div>
        {isPinned && (
          <div className={styles.LatestResearch}>LATEST RESEARCH</div>
        )}
      </div>
      <div>
        <a
          className={styles.TextBlock}
          href={url}
          target='_blank'
          rel='noreferrer'
        >
          <div className={styles.Headline}>{headline}</div>
          <div className={styles.Summary}>{summary}</div>
        </a>
        <div className={styles.Footer}>
          <div className={styles.Source}>
            {`${source}, ${date}`}
          </div>
          <button className={styles.BookmarkBtn} onClick={onBookmarkClickHandler}>
            <Icon name={isBookmarked ? 'bookmark-filled' : 'bookmark'} />
          </button>
        </div>
      </div>
    </div>
  )
})

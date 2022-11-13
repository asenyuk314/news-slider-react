import React, { memo, useMemo } from 'react'

import { ReactComponent as Bookmark } from './assets/bookmark.svg'
import { ReactComponent as BookmarkFilled } from './assets/bookmark-filled.svg'
import { IconProps } from './icon-interfaces'
import styles from './icon.module.scss'

export const Icon = memo(({ name }: IconProps) => {
  const iconElement = useMemo(() => {
    switch (name) {
      case 'bookmark':
        return <Bookmark />
      case 'bookmark-filled':
        return <BookmarkFilled />
    }
  }, [name])

  return (
    <div className={styles.Icon}>
      {iconElement}
    </div>
  )
})

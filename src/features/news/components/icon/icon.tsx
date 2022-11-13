import React, { memo, useMemo } from 'react'
import cn from 'classnames'

import { ReactComponent as Bookmark } from './assets/bookmark.svg'
import { ReactComponent as BookmarkFilled } from './assets/bookmark-filled.svg'
import { ReactComponent as Search } from './assets/search.svg'
import { IconProps } from './icon-interfaces'
import styles from './icon.module.scss'

export const Icon = memo(({ className, name }: IconProps) => {
  const iconElement = useMemo(() => {
    switch (name) {
      case 'bookmark':
        return <Bookmark />
      case 'bookmark-filled':
        return <BookmarkFilled />
      case 'search':
        return <Search />
    }
  }, [name])

  return (
    <div className={cn(styles.Icon, className)}>
      {iconElement}
    </div>
  )
})

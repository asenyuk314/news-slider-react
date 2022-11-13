import React, { memo } from 'react'

import { TabsProps } from './tabs-interfaces'
import styles from './tabs.module.scss'

export const Tabs = memo(({
  currentTab,
  setCurrentTab,
  tabsArray
}: TabsProps) => {
  return (
    <div className={styles.Tabs}>
      {tabsArray.map(item => (
        <button
          key={item}
          className={styles.TabButton}
          onClick={() => setCurrentTab(item)}
          disabled={item === currentTab}
        >
          {item}
        </button>
      ))}
    </div>
  )
})

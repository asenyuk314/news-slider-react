import React, { memo } from 'react'

import { PaginationProps } from './pagination-interfaces'
import styles from './pagination.module.scss'

export const Pagination = memo(({
  currentPage,
  itemsPerPage,
  setCurrentPage,
  totalItems
}: PaginationProps) => {

  const onNextBtnClickHandler = () => {
    setCurrentPage((val: number) => val + 1)
  }

  const onPrevBtnClickHandler = () => {
    setCurrentPage((val: number) => val - 1)
  }

  const firstItemNumber = Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)
  const lastItemNumber = Math.min(currentPage * itemsPerPage, totalItems)

  return (
    <div className={styles.Pagination}>
      <div>
        <span>
          {`${firstItemNumber}-${lastItemNumber} `}
        </span>
        <span className={styles.TotalItemsSign}>
          {`out of ${totalItems}`}
        </span>
      </div>
      <div>
        <button
          className={styles.Button}
          onClick={onPrevBtnClickHandler}
          disabled={currentPage === 1}
        >
          PREVIOUS
        </button>
        <button
          className={styles.Button}
          onClick={onNextBtnClickHandler}
          disabled={currentPage >= Math.ceil(totalItems / itemsPerPage)}
        >
          NEXT
        </button>
      </div>
    </div>
  )
})

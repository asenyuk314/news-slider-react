import React, { memo, useEffect, useState } from 'react'

import { PaginationProps } from './pagination-interfaces'
import styles from './pagination.module.scss'

export const Pagination = memo(({
  itemsPerPage,
  onPaginate,
  totalItems
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1)

  const onNextBtnClickHandler = () => {
    setCurrentPage(val => val + 1)
  }

  const onPrevBtnClickHandler = () => {
    setCurrentPage(val => val - 1)
  }

  useEffect(() => {
    onPaginate(currentPage)
  }, [currentPage]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.Pagination}>
      <div>
        <span>
          {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, totalItems)} `}
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
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        >
          NEXT
        </button>
      </div>
    </div>
  )
})

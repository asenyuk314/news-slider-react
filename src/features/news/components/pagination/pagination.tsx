import React, { ChangeEventHandler, memo } from 'react'

import { Icon } from '../icon'
import { NUMBER_OF_DOTS } from './pagination-constants'
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

  const onSelectChangeHandler: ChangeEventHandler = e => {
    const target = e.target as HTMLSelectElement
    setCurrentPage(+target.value)
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const optionsArray = Array(Math.max(totalPages, 1)).fill(null).map((_, index) => index + 1)
  const optionsChanger = currentPage > 1 ? 2 : 1
  const dotsArray = optionsArray.slice(currentPage - optionsChanger, currentPage + NUMBER_OF_DOTS - optionsChanger)

  return (
    <div className={styles.Pagination}>
      <div className={styles.SelectorContainer}>
        <div className={styles.SelectSign}>Show</div>
        <select className={styles.Select} value={currentPage} onChange={onSelectChangeHandler}>
          {optionsArray.map(item => (
            <option key={`option${item}`} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className={styles.DotsContainer}>
        {dotsArray.map(item => (
          <button
            key={`dots${item}`}
            className={styles.DotButton}
            onClick={() => setCurrentPage(item)}
            disabled={currentPage === item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.ArrowButtonsContainer}>
        <button
          className={styles.ArrowButton}
          onClick={onPrevBtnClickHandler}
          disabled={currentPage === 1}
        >
          <Icon className={styles.ArrowIcon} name='arrow-left' />
        </button>
        <button
          className={styles.ArrowButton}
          onClick={onNextBtnClickHandler}
          disabled={currentPage >= Math.ceil(totalItems / itemsPerPage)}
        >
          <Icon className={styles.ArrowIcon} name='arrow-right' />
        </button>
      </div>
    </div>
  )
})

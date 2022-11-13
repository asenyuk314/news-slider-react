import { Dispatch, SetStateAction } from 'react'

export interface PaginationProps {
  currentPage: number
  itemsPerPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  totalItems: number
}

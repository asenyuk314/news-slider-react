export interface PaginationProps {
  itemsPerPage: number
  onPaginate: (pageNumber: number) => void
  totalItems: number
}

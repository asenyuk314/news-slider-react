export interface ResponseItem {
  category: string
  datetime: number
  headline: string
  id: number
  image: string
  related: string
  source: string
  summary: string
  url: string
}

export interface NewsItem extends ResponseItem {
  isBookmarked: boolean
}

export interface NewsState {
  allNews: NewsItem[]
}

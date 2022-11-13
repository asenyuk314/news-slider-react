export interface NewsItem {
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

export interface NewsState {
  allNews: NewsItem[]
  bookmarkedIds: number[]
}

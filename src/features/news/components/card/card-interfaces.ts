import { NewsItem } from '../../news-interfaces'

export interface CardProps extends NewsItem {
  isPinned?: boolean
}

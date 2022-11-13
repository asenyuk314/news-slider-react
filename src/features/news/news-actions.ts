import { AppDispatch } from 'src/app/store'

import { API } from './news-constants'
import { ResponseItem } from './news-interfaces'
import { setNews } from './news-slice'

export const requestNews = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(API)
    if (response.ok) {
      const json: ResponseItem[] = await response.json()
      dispatch(setNews(json.map(item => ({ ...item, isBookmarked: false }))))
    }
  } catch (e) {
    console.error(e)
  }
}

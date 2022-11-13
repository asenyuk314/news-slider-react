import { AppDispatch } from 'src/app/store'

import { API } from './news-constants'
import { setNews } from './news-slice'

export const requestNews = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(API)
    if (response.ok) {
      const json = await response.json()
      dispatch(setNews(json))
    }
  } catch (e) {
    console.error(e)
  }
}

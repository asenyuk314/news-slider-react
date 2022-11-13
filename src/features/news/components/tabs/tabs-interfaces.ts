import { Dispatch, SetStateAction } from 'react'

export interface TabsProps {
  currentTab: string
  setCurrentTab: Dispatch<SetStateAction<string>>
  tabsArray: string[]
}

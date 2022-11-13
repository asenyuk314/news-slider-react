import { ChangeEventHandler, useState } from 'react'

export const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue)
  
  const onChange: ChangeEventHandler = e => {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    setValue(target.value)
  }

  return { value, onChange }
}

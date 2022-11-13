import React, { InputHTMLAttributes, memo } from 'react'

import { Icon } from '../icon'
import styles from './styled-input.module.scss'

export const StyledInput = memo((props: InputHTMLAttributes<HTMLInputElement>) => (
  <div className={styles.StyledInput}>
    <input className={styles.Input} type='text' {...props} />
    <Icon className={styles.Icon} name='search' />
  </div>
))

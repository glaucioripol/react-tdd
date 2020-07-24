import React from 'react'

import Styles from './styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input: React.FC<Props> = (props) => (
  <div className={Styles.inputWrap}>
    <input {...props} autoComplete="off" />
    <span className={Styles.status}>🔴</span>
  </div>
)

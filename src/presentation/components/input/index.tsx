import React from 'react'

import Styles from './styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input: React.FC<Props> = (props) => {
  return (
    <div className={Styles.inputWrap}>
      <input{...props} />
      <span className={Styles.status}>🔴</span>
    </div>
  )
}

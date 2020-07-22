import React from 'react'

import Styles from './styles.scss'

type IProps = React.HtmlHTMLAttributes<HTMLElement>

export const Spinner: React.FC<IProps> = ({ className }: IProps) => (
  <div className={[Styles.spinner, className].join(' ')}>
    <div />
    <div />
    <div />
    <div />
  </div>
)

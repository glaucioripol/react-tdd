import React from 'react'

import { Spinner } from '..'

import Styles from './styles.scss'

interface IProps {
  loading?: boolean
}

export const FormStatus: React.FC<IProps> = ({ loading }: IProps) => (
  <div className={Styles.errorWrap}>
    {loading && <Spinner className={Styles.spinner} />}
    <span className={Styles.error}>
      Erro
    </span>
  </div>
)

FormStatus.defaultProps = {
  loading: false
}

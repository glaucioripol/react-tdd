import React, { memo } from 'react'

import Styles from './styles.scss'

import { Logo } from '..'

const LoginHeaderComponent: React.FC = () => (
  <header className={Styles.header}>
    <Logo />
    <h1>4Dev - Enquetes para programadores</h1>
  </header>
)

// evitar renderizações deste componente, já que ele não tem estado
export const LoginHeader = memo(LoginHeaderComponent)

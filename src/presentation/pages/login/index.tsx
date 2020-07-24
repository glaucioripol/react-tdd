import React, { FormEvent } from 'react'

import Styles from './styles.scss'

import { Spinner, LoginHeader, Footer, Input } from '~/presentation/components'

export const Login: React.FC = () => {
  function handleSubmit(e: FormEvent): void {
    e.preventDefault()
  }
  return (
    <div className={Styles.login}>

      <LoginHeader />

      <form onSubmit={handleSubmit} className={Styles.form}>
        <h2>Login</h2>

        <Input type="email" name="email" id="email" placeholder="Digite seu E-mail" />

        <Input type="password" name="password" id="password" placeholder="Digite sua senha" />

        <button className={Styles.submit} type="submit">Entrar</button>

        <span className={Styles.link}>Criar conta</span>

        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>
            Erro
          </span>
        </div>
      </form>
      <Footer />
    </div >
  )
}

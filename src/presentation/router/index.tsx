import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Login } from '../pages'

import '../style/global.scss'

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={Login}/>
    </Switch>
  </BrowserRouter>
)

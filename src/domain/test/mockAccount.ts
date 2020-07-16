import { internet, random } from 'faker'

import { AuthenticationParams } from '~/domain/usecases'
import { AccountModel } from '../models'

export const mockAuthentication = (): AuthenticationParams => ({
  email: internet.email(),
  password: internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: random.uuid(),
  name: internet.userName()
})

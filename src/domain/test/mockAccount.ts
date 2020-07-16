import { internet, random } from 'faker'

import { AuthenticationParams } from '~/domain/usecases/authentication'
import { AccountModel } from '../models/account-model'

export const mockAuthentication = (): AuthenticationParams => ({
  email: internet.email(),
  password: internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: random.uuid(),
  name: internet.userName()
})

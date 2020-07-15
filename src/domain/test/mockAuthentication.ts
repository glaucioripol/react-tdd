import { internet } from 'faker'

import { AuthenticationParams } from '~/domain/usecases/authentication'

export const mockAuthentication = (): AuthenticationParams => ({
  email: internet.email(),
  password: internet.password()
})

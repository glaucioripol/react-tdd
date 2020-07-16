import { IHttpPostClient } from '~/data/protocols/http/httpPostClient'
import { AuthenticationParams, IAuthentication } from '~/domain/usecases/authentication'
import { HttpStatusCode } from '~/data/protocols/http/httpResponse'

import { InvalidCredentialsError } from '~/domain/errors/InvalidCredentialsError'
import { UnexpectedError } from '~/domain/errors/unexpectedError'
import { AccountModel } from '~/domain/models/account-model'

export class RemoteAuthentication implements IAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient<AuthenticationParams, AccountModel>
  ) { }

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}

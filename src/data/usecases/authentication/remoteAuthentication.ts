import { IHttpPostClient } from '~/data/protocols/http/httpPostClient'
import { AuthenticationParams } from '~/domain/usecases/authentication'
import { HttpStatusCode } from '~/data/protocols/http/httpResponse'
import { InvalidCredentialsError } from '~/domain/errors/InvalidCredentialsError'
import { UnexpectedError } from '~/domain/errors/unexpectedError'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient
  ) { }

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: {
        break
      }
      case HttpStatusCode.unauthorized: {
        throw new InvalidCredentialsError()
      }
      default: {
        throw new UnexpectedError()
      }
    }
  }
}

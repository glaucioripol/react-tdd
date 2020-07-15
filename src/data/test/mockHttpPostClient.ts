import { IHttpPostClient, HttpPostParams } from '../protocols/http/httpPostClient'

export class HttpPostClientSpy implements IHttpPostClient {
  url?: string
  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url

    return Promise.resolve()
  }
}

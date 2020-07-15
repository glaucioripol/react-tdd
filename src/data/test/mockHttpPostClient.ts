import { IHttpPostClient, HttpPostParams } from '~/data/protocols/http/httpPostClient'

export class HttpPostClientSpy implements IHttpPostClient {
  url?: string
  body?: object
  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}

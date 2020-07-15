import { IHttpPostClient } from '../protocols/http/httpPostClient'

export class HttpPostClientSpy implements IHttpPostClient {
  url?: string
  async post(url: string): Promise<void> {
    this.url = url

    return Promise.resolve()
  }
}

import { IHttpPostClient } from '../../protocols/http/httpPostClient'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient
  ) { }

  async auth(): Promise<void> {
    await this.httpPostClient.post({
      url: this.url
    })
  }
}

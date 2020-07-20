import { HttpPostParams, HttpResponse, IHttpPostClient } from '~/data/protocols/http'

import axios from 'axios'

export class AxiosHttpClient implements IHttpPostClient<any, any> {
  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const { status, data } = await axios.post(params.url, params.body)
    return {
      statusCode: status,
      body: data
    }
  }
}

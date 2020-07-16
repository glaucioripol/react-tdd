import { HttpResponse } from '.'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

// T = tipo do body, R = tipo do response
export interface IHttpPostClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>
}

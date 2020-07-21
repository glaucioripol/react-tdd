import axios from 'axios'

import { AxiosHttpClient } from './axiosHttpClient'
import { MockAxios } from '~/infra/test'
import { mockPostRequest } from '~/data/test'

// mock do axios
jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}
const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = MockAxios()
  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL, verb and values on body', async () => {
    const mockedRequest = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(mockedRequest)
    // validar requisicao - url, body
    expect(mockedAxios.post).toHaveBeenCalledWith(mockedRequest.url, mockedRequest.body)
  })

  test('Should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    // pegando valor direto do mock -> 0 é o resolved value e ele é uma promise
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})

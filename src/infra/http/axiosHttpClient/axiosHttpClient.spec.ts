import axios from 'axios'
import faker from 'faker'

import { AxiosHttpClient } from './axiosHttpClient'
import { HttpPostParams } from '~/data/protocols/http'

// mock de lib
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL, verb and values on body', async () => {
    const mockedRequest = mockPostRequest()
    const sut = makeSut()
    await sut.post(mockedRequest)
    // validar requisicao - url, body
    expect(mockedAxios.post).toHaveBeenCalledWith(mockedRequest.url, mockedRequest.body)
  })
})

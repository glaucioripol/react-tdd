import { RemoteAuthentication } from './remoteAuthentication'
import { HttpPostClientSpy } from '../../test/mockHttpPostClient'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClientSpy with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)

    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})

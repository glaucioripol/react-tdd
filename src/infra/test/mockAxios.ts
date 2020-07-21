import axios from 'axios'
import faker from 'faker'

export const MockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  // mocando retorno do post
  mockedAxios.post.mockResolvedValue({
    status: faker.random.number(),
    data: faker.random.objectElement()
  })

  return mockedAxios
}

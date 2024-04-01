import { getGithubAccount } from './getGithubAccount'

const mockedJson = vitest.fn().mockResolvedValue({})
const mockedFetch = vitest.fn()

beforeEach(() => {
  const mockResponse = {
    ok: true,
    status: 200,
    json: mockedJson,
  }
  global.fetch = mockedFetch.mockResolvedValue(mockResponse)
})

afterEach(() => {
  vitest.resetAllMocks()
})

test('fetchが実行され、successが返される', async () => {
  expect.assertions(3)
  const expected = await getGithubAccount()

  expect(mockedFetch).toHaveBeenCalledWith(
    'https://api.github.com/users/nobumitsu-1995',
  )
  expect(mockedJson).toHaveBeenCalledWith()
  expect(expected).toEqual({
    href: undefined,
    name: undefined,
    src: undefined,
  })
})

test('fetchがエラーだった時、errorがthrowされる', async () => {
  expect.assertions(1)
  global.fetch = mockedFetch.mockResolvedValue({
    ok: false,
  })

  const expected = await getGithubAccount()

  expect(expected).toEqual({
    href: 'https://github.com/nobumitsu-1995',
    name: '@nobumitsu-1995',
    src: 'https://avatars.githubusercontent.com/u/70850598?v=4',
  })
})

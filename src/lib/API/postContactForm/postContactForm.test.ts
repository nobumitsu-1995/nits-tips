import { postContactForm } from './postContactForm'

const mockedJson = vitest.fn()
const mockedFetch = vitest.fn()
const args = {
  name: 'name',
  email: 'email@example.com',
  content: 'content',
}

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
  expect.assertions(2)
  const expected = await postContactForm(args)

  expect(mockedFetch).toHaveBeenCalledWith('undefined/sendEmailAPI', {
    body: '{"name":"name","email":"email@example.com","content":"content"}',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  expect(expected).toEqual({
    success: true,
  })
})

test('fetchがエラーだった時、errorがthrowされる', async () => {
  expect.assertions(1)
  global.fetch = mockedFetch.mockResolvedValue({
    ok: false,
  })

  expect(() => postContactForm(args)).rejects.toThrow(
    'メール送信に失敗しました。',
  )
})

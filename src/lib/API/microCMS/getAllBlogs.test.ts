import { getAllBlogs } from './getAllBlogs'

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

test('getAllBlogsで正常に値が取得できる', async () => {
  await getAllBlogs()
  expect(await mockedFetch()).toMatchSnapshot()
  expect(mockedJson).toHaveBeenCalledWith()
})

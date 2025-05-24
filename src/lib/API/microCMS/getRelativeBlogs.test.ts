import { blog } from '@/testUtils/fixtures/blogsData'
import { getRelativeBlogs } from './getRelativeBlogs'

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

test('getRelativeBlogsで正常に値が取得できる', async () => {
  await getRelativeBlogs(blog())
  expect(await mockedFetch()).toMatchSnapshot()
  expect(await mockedFetch()).toMatchSnapshot()
  expect(await mockedFetch()).toMatchSnapshot()
  expect(mockedJson).toHaveBeenCalledWith()
})

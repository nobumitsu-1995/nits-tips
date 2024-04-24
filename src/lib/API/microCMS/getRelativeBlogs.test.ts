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
  expect(mockedFetch).toHaveBeenNthCalledWith(
    1,
    expect.stringContaining(
      'blogs?limit=4&filters=title%5Bcontains%5D%EF%BC%88%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB%EF%BC%89%E3%81%BE%E3%81%9A%E3%81%AF%E3%81%93%E3%81%AE%E8%A8%98%E4%BA%8B%E3%82%92%E9%96%8B%E3%81%8D%E3%81%BE%E3%81%97%E3%82%87%E3%81%86%5Band%5Did%5Bnot_equals%5Dh8mr8y9vhx%5Band%5DisHidden%5Bnot_equals%5Dtrue',
    ),
    expect.any(Object),
  )
  expect(mockedFetch).toHaveBeenNthCalledWith(
    2,
    expect.stringContaining(
      'blogs?limit=4&filters=tags%5Bcontains%5Do39i0-i8y7r%5Band%5Did%5Bnot_equals%5Dh8mr8y9vhx%5Band%5DisHidden%5Bnot_equals%5Dtrue',
    ),
    expect.any(Object),
  )
  expect(mockedFetch).toHaveBeenNthCalledWith(
    3,
    expect.stringContaining(
      'blogs?limit=4&filters=category%5Bequals%5Ddaz0qkbj6%5Band%5Did%5Bnot_equals%5Dh8mr8y9vhx%5Band%5DisHidden%5Bnot_equals%5Dtrue',
    ),
    expect.any(Object),
  )
  expect(mockedJson).toHaveBeenCalledWith()
})

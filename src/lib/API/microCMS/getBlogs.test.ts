import { getBlogsData } from './getBlogs'

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

test('getBlogsで正常に値が取得できる', async () => {
  await getBlogsData({
    filters: 'isHidden[not_equals]true',
    orders: 'updatedAt',
  })
  expect(mockedFetch).toHaveBeenCalledWith(
    expect.stringContaining(
      'blogs?limit=15&filters=isHidden%5Bnot_equals%5Dtrue&orders=updatedAt',
    ),
    expect.any(Object),
  )
  expect(mockedJson).toHaveBeenCalledWith()
})

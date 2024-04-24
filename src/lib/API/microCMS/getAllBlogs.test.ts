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
  expect(mockedFetch).toHaveBeenCalledWith(
    expect.stringContaining(
      'blogs?filters=isHidden%5Bnot_equals%5Dtrue&limit=0',
    ),
    expect.any(Object),
  )
  expect(mockedJson).toHaveBeenCalledWith()
})

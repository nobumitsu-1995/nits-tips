import { getDraftBlog } from './getDraftBlog'

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

test('getDraftBlogで正常に値が取得できる', async () => {
  await getDraftBlog({
    contentId: 'mockcontentId',
    draftKey: 'mockdraftKey',
  })
  expect(mockedFetch).toHaveBeenCalledWith(
    expect.stringContaining('blogs/mockcontentId?draftKey=mockdraftKey'),
    expect.any(Object),
  )
  expect(mockedJson).toHaveBeenCalledWith()
})

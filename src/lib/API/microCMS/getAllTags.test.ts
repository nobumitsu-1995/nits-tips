import { getAllTags } from './getAllTags'

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

test('getAllTagsで正常に値が取得できる', async () => {
  await getAllTags()
  expect(mockedFetch).toHaveBeenCalledWith(
    expect.stringContaining('tags?limit=0'),
    expect.any(Object),
  )
  expect(mockedJson).toHaveBeenCalledWith()
})

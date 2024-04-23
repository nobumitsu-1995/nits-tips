import { getAllCategories } from './getAllCategories'

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

test('getAllCategoriesで正常に値が取得できる', async () => {
  await getAllCategories()
  expect(mockedFetch).toHaveBeenCalledWith(
    expect.stringContaining('categories?limit=0'),
    expect.any(Object),
  )
  expect(mockedJson).toHaveBeenCalledWith()
})

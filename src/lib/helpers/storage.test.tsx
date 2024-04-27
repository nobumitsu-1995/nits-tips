import { deleteStorage, getStorage, setStorage } from './storage'

const PARAMS = { foo: 'bar', baz: 123 }
const KEY = 'testKey'

beforeEach(() => {
  localStorage.clear()
})

test('オブジェクトをストレージに保存する', () => {
  setStorage({ params: PARAMS, key: KEY })
  expect(localStorage.getItem(KEY)).toBeDefined()
})

test('保存したオブジェクトを取得する', () => {
  localStorage.setItem(KEY, JSON.stringify(PARAMS))
  const storedParams = getStorage(KEY)
  expect(storedParams).toEqual(PARAMS)
})

test('存在しないキーを指定した場合、nullが返される', () => {
  const key = 'nonExistingKey'
  const storedParams = getStorage(key)
  expect(storedParams).toBeNull()
})

test('ストレージから値を削除する', () => {
  localStorage.setItem(KEY, JSON.stringify(PARAMS))
  deleteStorage(KEY)
  expect(localStorage.getItem(KEY)).toBeNull()
})

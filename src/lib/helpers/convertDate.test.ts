import { convertDate } from './convertDate'

test('日付を表示ように整形する', () => {
  const DATE = '2024-02-24T11:37:06.594Z'
  const result = convertDate(DATE)
  expect(result).toBe('2024-02-24')
})

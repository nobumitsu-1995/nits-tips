import { replaceSpacesWithComma } from './replaceSpacesWithComma'

test('空白が,に変換される', () => {
  expect(replaceSpacesWithComma('hoge hoge')).toBe('hoge,hoge')
  expect(replaceSpacesWithComma('hoge　hoge')).toBe('hoge,hoge')
  expect(replaceSpacesWithComma('foo bar　baz')).toBe('foo,bar,baz')
})

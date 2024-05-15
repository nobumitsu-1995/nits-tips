import { generateFilters } from './generateFilters'

const category = 'testCategory'
const tag = 'testTag1,testTag2,testTag3'
const searchWord = 'testSearchWord'

test('各値を受け取った時、目的の値になる。', () => {
  expect(generateFilters({ category: '', tag: '', searchWord: '' })).toBe(
    'isHidden[not_equals]true',
  )
  expect(generateFilters({ category, tag: '', searchWord: '' })).toBe(
    'isHidden[not_equals]true[and]category[equals]testCategory',
  )
  expect(generateFilters({ category: '', tag, searchWord: '' })).toBe(
    'isHidden[not_equals]true[and]tags[contains]testTag1[and]tags[contains]testTag2[and]tags[contains]testTag3',
  )
  expect(generateFilters({ category: '', tag: '', searchWord })).toBe(
    'isHidden[not_equals]true[and]title[contains]testSearchWord',
  )
  expect(generateFilters({ category, tag, searchWord })).toBe(
    'isHidden[not_equals]true[and]category[equals]testCategory[and]tags[contains]testTag1[and]tags[contains]testTag2[and]tags[contains]testTag3[and]title[contains]testSearchWord',
  )
})

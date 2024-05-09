import { SEARCH_TYPE } from '@/components/Organisms/search/TextSearch'
import { generateSearchUrlQuery } from './generateSearchUrlQuery'

const FILTER_SEARCH_PARAMS = {
  tags: ['testTag1', 'testTag2'],
  category: 'testCategory',
}

const WORD_SEARCH_PARAMS = {
  searchType: SEARCH_TYPE.all,
  searchWord: 'testSearchWord',
}

test('絞り込み検索の引数が渡された時、絞込検索用のURLクエリを作成する', () => {
  expect(generateSearchUrlQuery(FILTER_SEARCH_PARAMS)).toMatchSnapshot()
})

test('絞り込み検索の引数でtagsが空配列で渡された時、絞込検索用のURLクエリを作成する', () => {
  expect(
    generateSearchUrlQuery({ ...FILTER_SEARCH_PARAMS, tags: [] }),
  ).toMatchSnapshot()
})

test('ワード検索の引数が渡された時、ワード検索用のURLクエリを作成する', () => {
  expect(generateSearchUrlQuery(WORD_SEARCH_PARAMS)).toMatchSnapshot()
})

test('ワード検索の引数でスペース有のキーワードが渡された時、ワード検索用のURLクエリを作成する', () => {
  expect(
    generateSearchUrlQuery({
      ...WORD_SEARCH_PARAMS,
      searchWord: 'testSearchWord1 testSearchWord2',
    }),
  ).toMatchSnapshot()
})

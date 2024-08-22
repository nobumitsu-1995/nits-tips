import React from 'react'
import { setup } from '@/testUtils'
import {
  calcTotalPage,
  useArticleWithPagination,
} from './useArticleWithPagination'
import { createArtilceArray } from '@/testUtils/fixtures/articleData'

const Component = () => {
  const { currentArticles, currentPage, setCurrentPage } =
    useArticleWithPagination({ articles: createArtilceArray() })

  return (
    <div>
      <p data-testid="currentPage">{currentPage}</p>
      <ul>
        {currentArticles.map((article) => (
          <li key={article.id}>
            <button type="button">{article.id}</button>
          </li>
        ))}
      </ul>
      <ul>
        {[1, 2, 3, 4, 5].map((number) => (
          <li key={number}>
            <button type="button" onClick={() => setCurrentPage(number)}>
              to:{number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

describe('calcTotalPage関数', () => {
  test('記事数が0の時、0を返す', () => {
    expect(calcTotalPage(0)).toBe(0)
  })
  test('記事数が1の時、1を返す', () => {
    expect(calcTotalPage(1)).toBe(1)
  })
  test('記事数が6の時、1を返す', () => {
    expect(calcTotalPage(6)).toBe(1)
  })
  test('記事数が7の時、2を返す', () => {
    expect(calcTotalPage(7)).toBe(2)
  })
})

describe('useArticleWithPagination Hooks', () => {
  test('ページ遷移ボタンを押した時、currentPage, currentArticlesが正常に切り替わる', async () => {
    const { user, getByRole, getByTestId, queryByRole } = setup(<Component />)

    expect(getByTestId('currentPage').textContent).toBe('1')
    expect(getByRole('button', { name: '1' })).toBeInTheDocument()
    expect(getByRole('button', { name: '5' })).toBeInTheDocument()
    expect(queryByRole('button', { name: '6' })).not.toBeInTheDocument()

    await user.click(getByRole('button', { name: 'to:2' }))
    expect(getByRole('button', { name: '6' })).toBeInTheDocument()
    expect(getByRole('button', { name: '11' })).toBeInTheDocument()
    expect(queryByRole('button', { name: '12' })).not.toBeInTheDocument()
  })
})

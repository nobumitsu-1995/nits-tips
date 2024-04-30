import React from 'react'
import { Icon } from '@Atoms/Icon'
import { SmallLoading } from '@Atoms/SmallLoading'
import * as styles from './SearchForm.css'
import { SEARCH_TYPE, type SearchType } from '../TextSearch'

type Props = {
  /** 検索ボタン押下時の関数 */
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  /** a11yのid指定用 */
  id?: string
  /** 検索方法（全文検索 or タイトル検索） */
  searchType?: SearchType
  /** 検索ワード */
  searchWord: string
  /** フォーム入力操作 */
  handleChangeSearch: React.ChangeEventHandler<HTMLInputElement>
  /** スリムタイプになる */
  isSlimType?: boolean
  /** ローディング状態の管理 */
  isLoading: boolean
}

export const SearchForm: React.FC<Props> = ({
  onSubmit,
  id,
  searchType = SEARCH_TYPE.all,
  searchWord,
  handleChangeSearch,
  isSlimType = false,
  isLoading,
}) => (
  <form
    aria-labelledby={id}
    className={styles.form}
    action="/search/result/"
    method="get"
    onSubmit={onSubmit}
  >
    <input
      type="search"
      placeholder="検索"
      aria-labelledby={id}
      name="searchWord"
      value={searchWord}
      onChange={handleChangeSearch}
      disabled={isLoading}
      required
      className={`${styles.input} ${isSlimType && styles.slim}`}
    />
    <input type="text" name="searchType" defaultValue={searchType} hidden />
    <button
      type="submit"
      aria-label="検索"
      disabled={isLoading}
      className={`${styles.button} ${isSlimType && styles.slim}`}
    >
      {isLoading ? <SmallLoading /> : <Icon type="search" size={24} />}
    </button>
  </form>
)

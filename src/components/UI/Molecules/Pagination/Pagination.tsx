import React from 'react'
import * as styles from './Pagination.css'
import { ICON_TYPE } from '../../Atoms/Icon'
import { PaginationArrowButton } from './PaginationArrowButton'

type Props = {
  /** ページ数合計 */
  totalPage: number
  /** 現在選択中のページ */
  currentPage: number
  /** 現在ページを設定する関数 */
  setCurrentPage: (page: number) => void
}

export const Pagination: React.FC<Props> = ({
  totalPage,
  currentPage,
  setCurrentPage,
}) => (
  <div className={styles.pagination}>
    <PaginationArrowButton
      iconType={ICON_TYPE.keyboard_double_arrow_left}
      onClickButton={() => setCurrentPage(1)}
      isDisabled={currentPage === 1}
      label="最初のページに移動"
    />
    <PaginationArrowButton
      iconType={ICON_TYPE.keyboard_arrow_left}
      onClickButton={() => setCurrentPage(currentPage - 1)}
      isDisabled={currentPage === 1}
      label="前のページに移動"
    />
    <ul className={styles.pageButtonList}>
      {Array(totalPage)
        .fill(0)
        .map((v, i) => v + i + 1)
        .map((page) => (
          <li key={page}>
            <button
              className={`${styles.pageButton} ${currentPage === page && styles.current}`}
              type="button"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
    </ul>
    <PaginationArrowButton
      iconType={ICON_TYPE.keyboard_arrow_right}
      onClickButton={() => setCurrentPage(currentPage + 1)}
      isDisabled={currentPage === totalPage}
      label="次のページに移動"
    />
    <PaginationArrowButton
      iconType={ICON_TYPE.keyboard_double_arrow_right}
      onClickButton={() => setCurrentPage(totalPage)}
      isDisabled={currentPage === totalPage}
      label="最後のページに移動"
    />
  </div>
)

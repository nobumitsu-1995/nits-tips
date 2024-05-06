import React, { useId, useState } from 'react'
import { Tab } from '@Molecules/Tab'
import { Modal } from '@Molecules/Modal'
import { Icon, ICON_TYPE } from '@Atoms/Icon'
import * as styles from './SearchConditions.css'
import { UpdatedAtSort } from './UpdatedAtSort'
import { CategoryFilter, type CategoryType } from './CategoryFilter'
import { TagFilter, type TagType } from './TagFilter'
import { WordFilter } from './WordFilter'
import {
  useSearchFormAction,
  useSearchFormState,
} from '@/lib/Hooks/useSearchForm'

type Props = {
  categories: CategoryType[]
  tags: TagType[]
}

type ContentId = 'word' | 'filter'
const CONTENTS_ID: MappedConst<ContentId> = {
  word: 'word',
  filter: 'filter',
}
const CONTENT_TITLE: Record<ContentId, string> = {
  word: 'ワード検索',
  filter: '絞り込み検索',
}

export const SearchConditions: React.FC<Props> = ({ categories, tags }) => {
  const buttonId = useId()
  const [isOpen, setIsOpen] = useState(window.screen.width >= 550)
  const {
    handleSetCategory,
    handleSetTags,
    handleDeleteTag,
    handleChangeSortType,
    handleSetSearch,
    handleSetSearchType,
    handleSubmitSearch,
  } = useSearchFormAction()
  const {
    tags: selectedTags,
    category,
    sortType,
    searchWord,
    searchType,
    isLoading,
  } = useSearchFormState()

  const contents = [
    {
      id: CONTENTS_ID.word,
      title: CONTENT_TITLE.word,
      children: (
        <WordFilter
          searchWord={searchWord}
          searchType={searchType}
          isLoading={isLoading}
          setSearchType={handleSetSearchType}
          handleSubmitSearch={handleSubmitSearch}
          handleChangeSearch={handleSetSearch}
        />
      ),
    },
    {
      id: CONTENTS_ID.filter,
      title: CONTENT_TITLE.filter,
      children: (
        <>
          <div className={styles.searchConditions}>
            <div className={styles.itemContainer}>
              <UpdatedAtSort
                selected={sortType}
                handleChange={handleChangeSortType}
              />
            </div>
            <div className={styles.itemContainer}>
              <CategoryFilter
                selected={category}
                handleChange={handleSetCategory}
                categories={categories}
              />
            </div>
          </div>
          <TagFilter
            selectedTags={selectedTags}
            tags={tags}
            onClick={handleDeleteTag}
            onChange={handleSetTags}
          />
        </>
      ),
    },
  ]

  return (
    <>
      <button
        className={styles.button}
        type="button"
        aria-expanded={isOpen}
        aria-controls={buttonId}
        aria-label={`検索モーダルを${isOpen ? '閉じる' : '開く'}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon type={isOpen ? ICON_TYPE.cancel : ICON_TYPE.search} size={24} />
      </button>
      <Modal id={buttonId} isOpen={isOpen} style={styles.modal}>
        <Tab
          contents={contents}
          initialPanel={searchWord ? CONTENTS_ID.word : CONTENTS_ID.filter}
        />
      </Modal>
    </>
  )
}

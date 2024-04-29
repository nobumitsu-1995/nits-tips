import React, { useState } from 'react'
import { Card } from '@Atoms/Card'
import * as styles from './Tab.css'

type Props = {
  contents: {
    id: string
    title: string
    children: React.ReactNode
  }[]
  initialPanel?: string
}

export const Tab: React.FC<Props> = ({
  contents,
  initialPanel = contents[0].id,
}) => {
  const [current, setCurrent] = useState<string>(initialPanel)
  const handleClick = (value: string) => {
    setCurrent(value)
  }

  return (
    <>
      <div role="tablist" aria-label="検索方法選択">
        {contents.map((content) => (
          <button
            className={`${styles.tab} ${content.id === current ? styles.currentTab : ''}`}
            role="tab"
            aria-selected={content.id === current}
            aria-controls={`panel-${content.id}`}
            id={`tab-${content.id}`}
            tabIndex={content.id === current ? -1 : 0}
            type="button"
            key={content.id}
            onClick={() => handleClick(content.id)}
          >
            {content.title}
          </button>
        ))}
      </div>
      <Card padding="12px 32px">
        {contents.map((content) => (
          <div
            className={`${styles.tabList} ${content.id === current ? styles.currentTabList : ''}`}
            id={`panel-${content.id}`}
            aria-labelledby={`tab-${content.id}`}
            aria-hidden={content.id !== current}
            role="tabpanel"
            key={content.id}
          >
            {content.children}
          </div>
        ))}
      </Card>
    </>
  )
}

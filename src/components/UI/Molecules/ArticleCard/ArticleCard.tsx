import React, { useState, useRef, useEffect } from 'react'
import { Card } from '@Atoms/Card'
import * as styles from './ArticleCard.css'
import { TagList } from '../TagList'
import { PublishedAt } from '../../Atoms/PublishedAt'
import type { ArticleCardData } from '@/lib/interfaces/Article'
import { Popup } from '@/components/UI/Atoms/Popup'

type Props = ArticleCardData

export const ArticleCard: React.FC<Props> = ({
  id,
  title,
  description,
  tagData,
  publishedAt,
  updatedAt,
  thumbnail,
}) => {
  const [isPopupShown, setIsPopupShown] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (descriptionRef.current) {
      if (
        descriptionRef.current.scrollHeight >
        descriptionRef.current.clientHeight
      ) {
        setIsOverflowing(true)
      }
    }
  }, [description])

  return (
    <Card padding="24px 0px">
      <div className={styles.container}>
        <PublishedAt publishedAt={publishedAt} updatedAt={updatedAt} />
      </div>
      <h3>
        <a href={`/detail/${id}/`}>
          <img className={styles.img} src={thumbnail} alt={title} />
        </a>
      </h3>
      <div className={styles.container}>
        <div
          onMouseEnter={() => setIsPopupShown(true)}
          onMouseLeave={() => setIsPopupShown(false)}
          className={styles.descriptionContainer}
        >
          <p className={styles.text} ref={descriptionRef}>
            {description}
          </p>
          <Popup isOpen={isPopupShown && isOverflowing}>{description}</Popup>
        </div>
        <TagList tagData={tagData} />
      </div>
    </Card>
  )
}

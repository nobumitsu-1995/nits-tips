import React from 'react'
import * as styles from './CategorySelector.css'
import { Radio } from '@/components/UI/Atoms/Radio'
import type { MicroCMS } from '@/types/microCMS'

type Props = {
  selectedCategory: string
  categories: Pick<MicroCMS['category'], 'id' | 'label'>[]
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

export const CategorySelector: React.FC<Props> = ({
  selectedCategory,
  categories,
  setCategory,
}) => (
  <div className={styles.categorySelector}>
    {categories.map((category) => (
      <Radio
        key={category.id}
        name="category"
        value={category.id}
        label={category.label}
        isChecked={category.id === selectedCategory}
        onChange={() => setCategory(category.id)}
      />
    ))}
  </div>
)

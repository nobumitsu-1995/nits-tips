import type { CategoryType } from '@/components/Organisms/search/SearchConditions/CategoryFilter'
import type { MicroCMS } from '@/types/microCMS'

export const convertToCategoryData = (
  categories: MicroCMS['category'][],
): CategoryType[] =>
  categories.map((category) => ({
    id: category.id,
    label: category.label,
  }))

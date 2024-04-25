import type { TagData } from '@/lib/interfaces/Tag'

const createTag = (
  label = 'javascript',
  src = 'https://placehold.co/400x400/F0DB4F/000',
  href = '/',
) => ({
  label,
  href,
  src,
})
export const tag: TagData = {
  label: 'frontend',
  href: '/',
}

export const tagData: TagData[] = [
  createTag('frontend', ''),
  createTag(),
  createTag('typescript'),
  createTag('react'),
]

import type { TagData } from '@/lib/interfaces/Tag'

const createTag = ({
  id = 'id',
  label = 'javascript',
  src = 'https://placehold.co/400x400/F0DB4F/000',
  href = '/',
}) => ({
  id,
  label,
  href,
  src,
})
export const tag: TagData = {
  id: 'id',
  label: 'frontend',
  href: '/',
}

export const tagData: TagData[] = [
  createTag({ label: 'frontend', src: '' }),
  createTag({}),
  createTag({ label: 'typescript' }),
  createTag({ label: 'react' }),
]

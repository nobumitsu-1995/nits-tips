import type { ComponentProps } from 'react'
import type { Tag } from '@Molecules/Tag'

type TagType = ComponentProps<typeof Tag>

const createTag = (
  label = 'javascript',
  src = 'https://placehold.co/400x400/F0DB4F/000',
  href = '/',
) => ({
  label,
  href,
  src,
})
export const tag: TagType = {
  label: 'frontend',
  href: '/',
}

export const tagData: TagType[] = [
  createTag('frontend', ''),
  createTag(),
  createTag('typescript'),
  createTag('react'),
]

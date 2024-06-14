export type StampId = 1 | 2 | 3 | 4 | 5 | 6

export type Stamp = {
  stampId: StampId
  icon: string
  label: string
}

export const REACTION_STAMPS: Stamp[] = [
  {
    stampId: 1,
    icon: '👍',
    label: 'good',
  },
  {
    stampId: 2,
    icon: '👀',
    label: 'watch',
  },
  {
    stampId: 3,
    icon: '😄',
    label: 'nice',
  },
  {
    stampId: 4,
    icon: '🚀',
    label: 'genius',
  },
  {
    stampId: 5,
    icon: '🎉',
    label: 'hooray',
  },
  {
    stampId: 6,
    icon: '❤️',
    label: 'love',
  },
] as const

export const returnReactionStamp = (stampId: StampId): string =>
  REACTION_STAMPS.find((v) => v.stampId === stampId)?.icon || ''

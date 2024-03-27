import React from 'react'
import { Share } from '@/components/UI/Molecules/Share'

type Props = {
  /** 共有するURL */
  url: string
  /** ツイートに反映する文言 */
  description: string
}

export const Presenter: React.FC<Props> = ({ url, description }) => (
  <Share description={description} url={url} />
)

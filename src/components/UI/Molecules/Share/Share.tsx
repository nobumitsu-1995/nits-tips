import React from 'react'
import { ICON_TYPE } from '@Atoms/Icon'
import * as styles from './Share.css'
import { CircleButton } from '../CircleButton'
import { TOAST_TYPE, useToastProvider } from '@/lib/Hooks/useToastProvider'

type Props = {
  /** 共有する内容のコンテンツ */
  description: string
  /** 共有するURL */
  url: string
}

export const Share: React.FC<Props> = ({ description, url }) => {
  const { showToast } = useToastProvider()
  const SNS_DATA = [
    {
      name: 'X',
      href: `http://twitter.com/share?url=${url}&text=${description}`,
    },
    {
      name: 'Facebook',
      href: `http://www.facebook.com/share.php?u=${url}`,
    },
  ]

  const handleClick = async () => {
    await window.navigator.clipboard.writeText(url)
    showToast({
      message: '記事URLをコピーしました。',
      type: TOAST_TYPE.succeed,
    })
  }

  return (
    <ul className={styles.share}>
      {SNS_DATA.map((data) => (
        <li key={data.name}>
          <a
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <img
              src={`/sns/${data.name}.png`}
              alt={`${data.name}に記事をシェア`}
              width={48}
              height={48}
              className={styles.img}
            />
          </a>
        </li>
      ))}
      <li>
        <CircleButton
          iconType={ICON_TYPE.link}
          tooltipText="記事URLをコピー"
          onClick={handleClick}
        />
      </li>
    </ul>
  )
}

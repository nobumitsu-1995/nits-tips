import React from 'react'
import { ICON_TYPE } from '@Atoms/Icon'
import * as styles from './Share.css'
import { CircleButton } from '../CircleButton'

type Props = {
  /** 共有する内容のコンテンツ */
  description: string
}

export const Share: React.FC<Props> = ({ description }) => {
  const SNS_DATA = [
    {
      name: 'X',
      href: `http://twitter.com/share?url=${global.location.href}&text=${description}`,
    },
    {
      name: 'Facebook',
      href: `http://www.facebook.com/share.php?u=${global.location.href}`,
    },
  ]

  /** TODO: ここでToastを表示させたい */
  const handleClick = async () => {
    await global.navigator.clipboard.writeText(global.location.href)
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

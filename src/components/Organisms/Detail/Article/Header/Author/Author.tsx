import React from 'react'
import * as styles from './Author.css'

type Props = {
  /** 名前 */
  name: string
  /** プロフ画像 */
  src: string
  /** githubのURL */
  href: string
}

export const Author: React.FC<Props> = ({ name, src, href }) => (
  <div className={styles.author}>
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={styles.img}
    >
      <img
        src={src}
        alt={`${name}のgithubトップ`}
        height={50}
        width={50}
        className={styles.img}
      />
    </a>
    <div>
      <p className={styles.role}>Frontend developer</p>
      <p className={styles.name}>
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >
          {name}
        </a>
      </p>
    </div>
  </div>
)

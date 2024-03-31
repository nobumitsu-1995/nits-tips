import React from 'react'
import { Heading } from '@Atoms/Heading'
import { Link } from '@Atoms/Link'
import * as styles from './Author.css'

export const Author: React.FC = () => (
  <section>
    <Heading text="管理人について" />
    <div className={styles.content}>
      <p className={styles.text}>
        &emsp;2022年5月からフロントエンドエンジニアとして活動しているnobumitsu-1995と申します。
      </p>
      <ul className={styles.list}>
        <li>
          <Link
            text="Github"
            href="https://github.com/nobumitsu-1995"
            isTagetBlank
          />
        </li>
        {/* <li>
          <Link text="X" href="/" isTagetBlank />
        </li> */}
        <li>
          <Link
            text="Wantedly"
            href="https://www.wantedly.com/id/nobumitsu_masu"
            isTagetBlank
          />
        </li>
        {/* <li>
          <Link text="zenn" href="/" isTagetBlank />
        </li> */}
      </ul>
    </div>
  </section>
)

import React from 'react'
import { Heading } from '@Atoms/Heading'
import { Link } from '@Atoms/Link'
import * as styles from './About.css'

export const About: React.FC = () => (
  <section>
    <Heading text="About" />
    <div className={styles.content}>
      <p className={styles.text}>
        &emsp;当サイトは、仕事や日常において習得、経験した知見を備忘録として残していく個人的なブログとなります。記事の内容は所属する団体、組織とは関係なく、個人の考え、発言です。
      </p>
      <p className={styles.text}>
        &emsp;また、掲載情報について、可能な限り正確な内容になるよう心がけていますが、確実な保証はできませんので、あらかじめご了承ください。
      </p>
      <p className={styles.text}>
        &emsp;詳しい規約につきましては
        <Link
          text="プライバシーポリシーページ"
          href="/privacy-policy"
          isTagetBlank
        />
        をご確認ください。
      </p>
      <p className={styles.text}>
        &emsp;当サイトに関する、ご意見、ご感想、ご質問などは
        <Link text="お問い合わせフォーム" href="#contact" isTargetBlank />
        からお受付しております。
      </p>
    </div>
  </section>
)

import React, { type PropsWithChildren } from 'react'
import { Card } from '@/components/UI/Atoms/Card'
import * as styles from './PrivacyPolicy.css'

export const PrivacyPolicy: React.FC<PropsWithChildren> = ({ children }) => (
  <main className={styles.container}>
    <div className={styles.privacyPolicy}>
      <Card padding="48px 32px">
        <div className={styles.content}>{children}</div>
      </Card>
    </div>
  </main>
)

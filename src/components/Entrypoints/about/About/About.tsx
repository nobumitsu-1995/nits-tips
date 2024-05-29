import React from 'react'
import { Author } from '@Organisms/About/Author'
import { About as AboutContent } from '@Organisms/About/About'
import * as styles from './About.css'
import { Border } from '@/components/UI/Atoms/Border'

export const About: React.FC = () => (
  <>
    <div className={styles.container}>
      <AboutContent />
    </div>
    <Border />
    <div className={styles.container}>
      <Author />
    </div>
  </>
)

import React from 'react'
import { About } from '@Organisms/About/About'
import { Author } from '@Organisms/About/Author'
import * as styles from './About.css'
import { Border } from '@/components/UI/Atoms/Border'

export const Presenter: React.FC = () => (
  <>
    <div className={styles.container}>
      <About />
    </div>
    <Border />
    <div className={styles.container}>
      <Author />
    </div>
  </>
)

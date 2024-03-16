import React from 'react'
import * as styles from './Theme.css'
import * as colorStyles from './colorTheme.css'
import * as fontStyles from './fontTheme.css'

type ThemeColorKey = keyof typeof colorStyles
type ThemeFontKey = keyof typeof fontStyles
const THEME_COLOR_ARRAY: MappedConstKey<ThemeColorKey> = [
  'background',
  'black',
  'darkGray',
  'error',
  'gray',
  'important',
  'lightGray',
  'link',
  'success',
  'white',
]
const THEME_FONT_ARRAY: MappedConstKey<ThemeFontKey> = ['nicoKaku', 'bizUD']

export const Theme: React.FC = () => (
  <div>
    <h2>Color Sample</h2>
    <ul className={styles.colorContainer}>
      {THEME_COLOR_ARRAY.map((color) => (
        <li key={color} className={styles.colorSample}>
          <span className={colorStyles[color]} />
          <p>{color}</p>
        </li>
      ))}
    </ul>
    <h2>Font Sample</h2>
    <ul>
      {THEME_FONT_ARRAY.map((font) => (
        <li key={font} className={fontStyles[font]}>
          <p>{font}</p>
          <p>Sample Text</p>
          <p>
            このあのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
          </p>
        </li>
      ))}
    </ul>
  </div>
)

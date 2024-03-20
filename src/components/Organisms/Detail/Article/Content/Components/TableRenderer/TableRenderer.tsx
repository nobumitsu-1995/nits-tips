import React from 'react'
import type { MarkdownComponents } from '@md-parser/react'
import * as styles from './TableRenderer.css'

const Teble: MarkdownComponents['table'] = ({ header, rows }) => (
  <table className={styles.table}>
    <thead>{header}</thead>
    <tbody>{rows}</tbody>
  </table>
)

const Header: MarkdownComponents['tableHeader'] = ({ children, align }) => (
  <th className={styles.header} style={{ textAlign: align }}>
    {children}
  </th>
)

const Row: MarkdownComponents['tableRow'] = ({ children }) => (
  <tr className={styles.row}>{children}</tr>
)

const Data: MarkdownComponents['tableData'] = ({ children, align }) => (
  <td className={styles.data} style={{ textAlign: align }}>
    {children}
  </td>
)

export const TableRenderer = {
  Teble,
  Header,
  Row,
  Data,
}

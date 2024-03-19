import React from 'react'
import { Heading } from '@Atoms/Heading'
import { type MarkdownComponents } from '@md-parser/react'

const HeadingRenderer: MarkdownComponents['heading'] = ({ children }) => (
  <Heading text={children} />
)

const ParagraphRenderer: MarkdownComponents['paragraph'] = ({ children }) => (
  <p style={{ marginTop: 24, lineHeight: 1.75 }}>{children}</p>
)

const BlockquoteRenderer: MarkdownComponents['blockquote'] = ({ children }) => (
  <blockquote>{children}</blockquote>
)

const LinkRenderer: MarkdownComponents['link'] = ({
  children,
  href,
  title,
}) => (
  <a href={href} title={title}>
    {children}
  </a>
)

const ListRenderer: MarkdownComponents['list'] = ({ children }) => (
  <ul>{children}</ul>
)

const ListItemRenderer: MarkdownComponents['listItem'] = ({ children }) => (
  <li>{children}</li>
)

const ImageRenderer: MarkdownComponents['image'] = ({ alt, src, title }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    title={title}
    width={700}
    height={500}
  />
)

const StrongRenderer: MarkdownComponents['strong'] = ({ children }) => (
  <strong>{children}</strong>
)

const ItalicRenderer: MarkdownComponents['emphasis'] = ({ children }) => (
  <em>{children}</em>
)

const StrikeThroughRenderer: MarkdownComponents['strikeThrough'] = ({
  children,
}) => <del>{children}</del>

const SubscriptRenderer: MarkdownComponents['subscript'] = ({ children }) => (
  <sub>{children}</sub>
)

const SuperscriptRenderer: MarkdownComponents['superscript'] = ({
  children,
}) => <sup>{children}</sup>

const CodeRenderer: MarkdownComponents['code'] = ({ value }) => (
  <pre>{value}</pre>
)

const InlineCodeRenderer: MarkdownComponents['inlineCode'] = ({ value }) => (
  <code>{value}</code>
)

const TableRenderer: MarkdownComponents['table'] = ({ header, rows }) => (
  <table className="table-fixed">
    <thead>{header}</thead>
    <tbody>{rows}</tbody>
  </table>
)

const TableRowRenderer: MarkdownComponents['tableRow'] = ({ children }) => (
  <tr>{children}</tr>
)

const TableHeaderRenderer: MarkdownComponents['tableHeader'] = ({
  children,
  align,
}) => <th style={{ textAlign: align }}>{children}</th>

const TableDataRenderer: MarkdownComponents['tableData'] = ({
  children,
  align,
}) => <td style={{ textAlign: align }}>{children}</td>

const DividerRenderer: MarkdownComponents['divider'] = () => (
  <hr style={{ borderTop: '1px dashed #ccc', margin: '36px 0' }} />
)

const CheckboxRenderer: MarkdownComponents['checkbox'] = ({
  checked,
  children,
}) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label>
    <input type="checkbox" readOnly checked={checked} />
    {children}
  </label>
)

export const components: MarkdownComponents = {
  heading: HeadingRenderer,
  paragraph: ParagraphRenderer,
  divider: DividerRenderer,
  blockquote: BlockquoteRenderer,
  link: LinkRenderer,
  list: ListRenderer,
  listItem: ListItemRenderer,
  image: ImageRenderer,
  strong: StrongRenderer,
  emphasis: ItalicRenderer,
  strikeThrough: StrikeThroughRenderer,
  subscript: SubscriptRenderer,
  superscript: SuperscriptRenderer,
  code: CodeRenderer,
  inlineCode: InlineCodeRenderer,
  table: TableRenderer,
  tableRow: TableRowRenderer,
  tableHeader: TableHeaderRenderer,
  tableData: TableDataRenderer,
  checkbox: CheckboxRenderer,
}

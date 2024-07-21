import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../../../styles/theme.css'

export const content = style({})

globalStyle(`${content} img`, {
  maxWidth: '100%',
  height: 'auto',
})

globalStyle(`${content} h2`, {
  margin: '40px 0 12px',
  lineHeight: 2,
})

globalStyle(`${content} h3`, {
  margin: '32px 0 12px',
  lineHeight: 2,
})

globalStyle(`${content} p`, {
  margin: '16px 0',
  lineHeight: 2,
  overflowWrap: 'break-word',
})

globalStyle(`${content} blockquote`, {
  padding: '8px 24px',
  marginLeft: 28,
  borderLeft: `5px solid ${vars.color.lightGray}`,
  color: vars.color.gray,
})

globalStyle(`${content} blockquote`, {
  padding: '8px 24px',
  marginLeft: 28,
  borderLeft: `5px solid ${vars.color.lightGray}`,
  color: vars.color.gray,
})

globalStyle(`${content} blockquote p`, {
  margin: 0,
})

globalStyle(`${content} hr`, {
  borderTop: `1px dashed ${vars.color.lightGray}`,
  margin: '36px 0',
})

globalStyle(`${content} a`, {
  color: vars.color.link,
  fontWeight: 'bold',
  overflowWrap: 'break-word',
})

globalStyle(`${content} a:hover`, {
  opacity: 0.8,
  transitionDuration: '0.3s',
  transitionProperty: 'opacity',
})

globalStyle(`${content} ul`, {
  margin: '12px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  listStyle: 'square',
  paddingLeft: 20,
})

globalStyle(`${content} ol`, {
  margin: '12px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  listStyle: 'decimal',
  paddingLeft: 20,
})

globalStyle(`${content} code`, {
  padding: '2px 6px',
  backgroundColor: '#2b2b2b',
  borderRadius: 2,
  lineHeight: 1.3,
  fontSize: 18,
  color: '#f8f8f2',
})

globalStyle(`${content} pre`, {
  padding: '12px 16px',
  backgroundColor: '#2b2b2b',
  borderRadius: 4,
  lineHeight: 1.3,
  fontSize: 18,
  color: '#f8f8f2',
})

globalStyle(`${content} table`, {
  display: 'block',
  overflowX: 'auto',
  tableLayout: 'auto',
  borderCollapse: 'collapse',
})

globalStyle(`${content} table p`, {
  margin: 0,
})

globalStyle(`${content} th`, {
  padding: '4px 12px',
  backgroundColor: vars.color.background,
  textAlign: 'center',
  border: `1px solid ${vars.color.lightGray}`,
})

globalStyle(`${content} tr`, {
  border: `1px solid ${vars.color.lightGray}`,
})

globalStyle(`${content} tr&:nth-child(2n)`, {
  backgroundColor: vars.color.lightGray,
})

globalStyle(`${content} td`, {
  padding: '4px 12px',
  border: `1px solid ${vars.color.lightGray}`,
})

globalStyle(`${content} u`, {
  overflowWrap: 'break-word',
})

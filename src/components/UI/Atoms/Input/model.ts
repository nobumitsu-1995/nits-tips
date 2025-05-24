import type { JSX } from 'react'

export type InputType = NonNullable<JSX.IntrinsicElements['input']['type']>
export const INPUT_TYPE: MappedConst<InputType> = {
  button: 'button',
  checkbox: 'checkbox',
  number: 'number',
  color: 'color',
  date: 'date',
  'datetime-local': 'datetime-local',
  email: 'email',
  file: 'file',
  hidden: 'hidden',
  image: 'image',
  month: 'month',
  password: 'password',
  radio: 'radio',
  range: 'range',
  reset: 'reset',
  search: 'search',
  submit: 'submit',
  tel: 'tel',
  text: 'text',
  time: 'time',
  url: 'url',
  week: 'week',
}

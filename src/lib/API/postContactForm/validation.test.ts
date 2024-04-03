import { FormError } from './FormError'
import { validateArgs } from './validation'

test('値が正しい場合、エラーはthrowされない。', () => {
  const args = {
    name: 'name',
    email: 'email@example.com',
    content: 'content',
  }

  expect(() => validateArgs(args)).not.toThrow()
})

test('nameが空白だった場合、エラーをthrowする。', () => {
  const args = {
    name: '',
    email: 'test@example.com',
    content: 'Test content',
  }

  expect(() => validateArgs(args)).toThrow(FormError)
  expect(() => validateArgs(args)).toThrow('名前(name)は必須項目です。')
})

test('e-mailが空白だった場合、エラーをthrowする。', () => {
  const args = {
    name: 'name',
    email: '',
    content: 'Test content',
  }

  expect(() => validateArgs(args)).toThrow(FormError)
  expect(() => validateArgs(args)).toThrow(
    'メールアドレス(e-mail)は必須項目です。',
  )
})

test('e-mailに@がない場合、エラーをthrowする。', () => {
  const args = {
    name: 'name',
    email: 'test.example.com',
    content: 'Test content',
  }

  expect(() => validateArgs(args)).toThrow(FormError)
  expect(() => validateArgs(args)).toThrow(
    'メールアドレス(e-mail)の入力値が不正です。',
  )
})

test('e-mailの@後に.がない場合、エラーをthrowする。', () => {
  const args = {
    name: 'name',
    email: 'test@examplecom',
    content: 'Test content',
  }

  expect(() => validateArgs(args)).toThrow(FormError)
  expect(() => validateArgs(args)).toThrow(
    'メールアドレス(e-mail)の入力値が不正です。',
  )
})

test('contentが空白だった場合、エラーをthrowする。', () => {
  const args = {
    name: 'name',
    email: 'test@example.com',
    content: '',
  }

  expect(() => validateArgs(args)).toThrow(FormError)
  expect(() => validateArgs(args)).toThrow(
    'お問い合わせ内容(content)は必須項目です。',
  )
})

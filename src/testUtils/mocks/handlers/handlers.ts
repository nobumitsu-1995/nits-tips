import { http } from 'msw'
import { sampleResolver } from './resolvers'

const { all, get, post, delete: httpDelete } = http

export const handlers = [
  all('/sample', sampleResolver),
]
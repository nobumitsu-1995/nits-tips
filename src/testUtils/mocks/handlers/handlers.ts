import { http } from 'msw'
// prettier-ignore
import { 
  sampleResolver,
} from './resolvers'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { all, get, post, put, patch, delete: httpDelete } = http

// prettier-ignore
export const handlers = [
  all('/sample', sampleResolver),
]

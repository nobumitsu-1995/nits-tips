import { http } from 'msw'
// prettier-ignore
import { 
  sampleResolver,
  deleteReactionStampResolver,
  postReactionStampResolver,
  getReactionStampsResolver,
} from './resolvers'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { all, get, post, put, patch, delete: httpDelete } = http

// prettier-ignore
export const handlers = [
  httpDelete('http://localhost:8080/reactionStamps/:id', deleteReactionStampResolver),
  post('http://localhost:8080/reactionStamps', postReactionStampResolver),
  get('http://localhost:8080/reactionStamps/:id', getReactionStampsResolver),
  all('/sample', sampleResolver),
]

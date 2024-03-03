import { handlers } from './handlers'

// eslint-disable-next-line import/no-mutable-exports, @typescript-eslint/no-explicit-any
let server: any

if (process.env.NODE_ENV === 'test') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const { setupServer } = require('msw/node')
  server = setupServer(...handlers)
}

export default server

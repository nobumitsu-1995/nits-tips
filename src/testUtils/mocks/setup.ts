import { setupServer } from 'msw/node'
import { afterAll, beforeAll, beforeEach } from 'vitest'
import { handlers } from './handlers'

export const setupMockServer = () => {
  const server = setupServer(...handlers)

  beforeAll(() => server.listen())
  beforeEach(() => server.resetHandlers())
  afterAll(() => server.close())

  return server
}

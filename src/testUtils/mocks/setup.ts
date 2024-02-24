import { setupServer } from 'msw/node'
import { handlers } from './handlers'
import { afterAll, beforeAll, beforeEach } from 'vitest'

export const setupMockServer = () => {
  const server = setupServer(...handlers)

  beforeAll(() => server.listen())
  beforeEach(() => server.resetHandlers())
  afterAll(() => server.close())

  return server
}

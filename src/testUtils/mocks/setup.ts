import { afterAll, beforeAll, beforeEach } from 'vitest'
import server from './server'

beforeAll(() => server.listen())
beforeEach(() => server.resetHandlers())
afterAll(() => server.close())

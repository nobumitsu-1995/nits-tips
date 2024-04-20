import { afterAll, beforeAll, beforeEach } from 'vitest'
import server from './server'
import '@testing-library/jest-dom/vitest'

beforeAll(() => server.listen())
beforeEach(() => server.resetHandlers())
afterAll(() => server.close())

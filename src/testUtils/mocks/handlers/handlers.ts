import { http } from 'msw'
import { sampleResolver } from './resolvers'

const { all } = http

export const handlers = [all('/sample', sampleResolver)]

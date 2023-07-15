import { DefineMethods } from 'aspida'
import { Comment } from '~/api/types'

export type Methods = DefineMethods<{
  get: {
    resBody: Comment[]
  }
}>

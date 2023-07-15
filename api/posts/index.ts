import { DefineMethods } from 'aspida'
import { Post, PostsListItem } from '~/api/types'

export type Methods = DefineMethods<{
  get: {
    resBody: PostsListItem[]
  }
  post: {
    reqBody: Post
    resBody: Post
  }
}>

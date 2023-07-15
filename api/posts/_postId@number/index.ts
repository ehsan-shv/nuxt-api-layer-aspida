import { DefineMethods } from 'aspida'
import { Post, PostsListItem } from '~/api/types'

export type Methods = DefineMethods<{
  put: {
    reqBody: Post
    resBody: PostsListItem
  }
  patch: {
    reqBody: Partial<Post>
    resBody: PostsListItem
  }
}>

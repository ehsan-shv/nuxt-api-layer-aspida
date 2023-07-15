import { DefineMethods } from 'aspida'
import { AlbumListItem } from '~/api/types'

export type Methods = DefineMethods<{
  get: {
    resBody: AlbumListItem[]
  }
}>

import { DefineMethods } from 'aspida'
import { PhotosListItem } from '~/api/types'

export type Methods = DefineMethods<{
  get: {
    resBody: PhotosListItem[]
  }
}>

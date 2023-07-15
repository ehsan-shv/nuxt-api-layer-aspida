export type Post = {
  UserId: number
  title: string
  body: string
}

export type PostsListItem = {
  UserId: number
  id: number
  title: string
  body: string
}

export type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export type AlbumListItem = {
  UserId: number
  id: number
  title: string
}

export type s = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

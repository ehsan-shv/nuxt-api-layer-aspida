# Type-safe API layer for Nuxt.js 3

> Type-safe API layer with Axios, [Aspida](https://github.com/aspida/aspida), and composition api.

1.  Create a directory for each endpoint in /api directory
2.  Create an endpoint type definition file
3.  run `yarn run build:api`
4.  Access to the whole auto generated endpoints by `useApi()` composition

### Example:

```typescript
// api/types.ts
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
```

```typescript
// /api/posts/index.ts

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
```

```typescript
// app.vue

<template>
  <div>
    <h1>Hello World!</h1>
    <button @click="getPosts">Get Posts</button>
  </div>
</template>
<script lang="ts" setup>
const getPosts = async () => {
  const response = await useApi().posts.get()
}
</script>

```

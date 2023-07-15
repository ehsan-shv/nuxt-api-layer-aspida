<template>
  <div>
    <h1>Hello World!</h1>
    <button @click="sendRequests">Send Requests</button>
  </div>
</template>
<script lang="ts" setup>
const sendRequests = async () => {
  // await useApi().albums.get()
  // await useApi().albums.get()
  // await useApi().photos.get()
  // await useApi().posts.get()
  // await useApi().posts._postId(2).comments.get()
  // await useApi()
  //   .posts._postId(2)
  //   .put({
  //     body: {
  //       title: 'title',
  //       body: 'body',
  //       UserId: 1,
  //     },
  //   })
  // await useApi()
  //   .posts._postId(2)
  //   .patch({
  //     body: {
  //       title: 'title',
  //     },
  //   })
  // await useApi().posts.post({
  //   body: {
  //     title: 'title',
  //     body: 'body',
  //     UserId: 1,
  //   },
  // })
}
</script>

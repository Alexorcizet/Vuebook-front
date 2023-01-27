<template>
  <section class="home-page">
    <section class="main-home-content">
      <StoriesReelsRooms />
      <CreatePost />
      <PostList />
    </section>
    <Sponsored />
  </section>
</template>

<script>
import Sponsored from "../components/Sponsored.vue";
import StoriesReelsRooms from "../components/StoriesReelsRooms.vue";
import CreatePost from "../components/CreatePost.vue";
import PostList from "../components/PostList.vue";
export default {
  components: {
    Sponsored,
    StoriesReelsRooms,
    CreatePost,
    PostList,
  },
};
</script>

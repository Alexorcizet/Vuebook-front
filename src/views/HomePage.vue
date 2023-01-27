<template>
  <section class="home-page">
    <section class="main-home-content">
      <StoriesReelsRooms />
      <Post />
    </section>
    <Sponsored />
  </section>
</template>

<script>
import Sponsored from "../components/Sponsored.vue";
import StoriesReelsRooms from "../components/StoriesReelsRooms.vue";
import Post from "../components/Post.vue";
export default {
  components: {
    Sponsored,
    StoriesReelsRooms,
    Post,
  },
};
</script>

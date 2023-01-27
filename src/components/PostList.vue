<template>
  <section class="posts-list">
    <ul v-if="posts" class="clean-list">
      <li v-for="post in posts" :key="post._id">
        <PostPreview :post="post" />
      </li>
    </ul>
  </section>
</template>

<script>
import PostPreview from "./PostPreview.vue";
export default {
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },
  components: {
    PostPreview,
  },
};
</script>

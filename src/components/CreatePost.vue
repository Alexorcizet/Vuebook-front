<template>
  <section v-if="user" class="post-container">
    <div class="post-input-container flex">
      <div class="input-img-container">
        <RouterLink to="/">
          <img :src="user.imgUrl" alt="img" />
        </RouterLink>
      </div>
      <div class="post-input" @click="openForm">
        <p>What's on your mind, {{ user.firstName }}?</p>
      </div>
    </div>
    <hr />
    <section class="post-actions flex">
      <div class="live-video flex" @click="openForm">
        <div>
          <img
            src="https://res.cloudinary.com/dk9b84f0u/image/upload/v1674823485/Vuebook/video-icon-1_drqabo.png"
            alt=""
          />
        </div>
        <div>Live video</div>
      </div>
      <div class="add-img-video flex" @click="openForm">
        <div>
          <img
            src="https://res.cloudinary.com/dk9b84f0u/image/upload/v1674823488/Vuebook/Gallery_lyphil.png"
            alt=""
          />
        </div>
        <div>Photo/video</div>
      </div>
      <div class="feeling-activity flex" @click="openForm">
        <div>
          <img
            src="https://res.cloudinary.com/dk9b84f0u/image/upload/v1674823485/Vuebook/smiley_cbd84a.jpg"
            alt=""
          />
        </div>
        <div>Feeling/activity</div>
      </div>
    </section>
    <PostForm v-if="isClicked" @on-close-post="onClosePost" />
  </section>
</template>

<script>
import PostForm from "./PostForm.vue";
export default {
  data() {
    return {
      user: {},
      isClicked: false,
    };
  },
  async created() {
    this.user = this.$store.getters.user;
  },
  methods: {
    openForm() {
      this.isClicked = !this.isClicked;
    },
    onClosePost(ev) {
      this.isClicked = ev;
    },
  },
  computed: {},
  components: {
    PostForm,
  },
};
</script>

<style>
</style>
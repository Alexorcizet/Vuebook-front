<template>
  <section class="post-container">
    <div class="post-input-container flex">
      <div class="input-img-container">
        <RouterLink to="/">
          <img src="../assets/imgs/alex.jpg" alt="img" />
        </RouterLink>
      </div>
      <div class="post-input" @click="openForm">
        <p>What's on your mind, User?</p>
      </div>
    </div>
    <hr />
    <section class="post-actions flex">
      <div class="live-video flex" @click="openForm">
        <div>
          <img src="../assets/imgs/video-icon-1.png" alt="" />
        </div>
        <div>Live video</div>
      </div>
      <div class="add-img-video flex" @click="openForm">
        <div>
          <img src="../assets/imgs/images.jfif" alt="" />
        </div>
        <div>Photo/video</div>
      </div>
      <div class="feeling-activity flex" @click="openForm">
        <div>
          <img src="../assets/imgs/smiley.jpg" alt="" />
        </div>
        <div>Feeling/activity</div>
      </div>
    </section>
    <PostForm v-if="isClicked"/>
  </section>
</template>

<script>
import PostForm from "./PostForm.vue";
export default {
  data() {
    return {
      msg: "",
      img: "",
      isClicked: false,
    };
  },
  components: {
    PostForm,
  },
  methods: {
    openForm() {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>

<style>
</style>
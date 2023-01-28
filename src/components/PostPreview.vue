<template>
  <section class="post-preview">
    <div class="post-info flex">
      <div class="flex">
        <div class="user-img">
          <img :src="user.imgUrl" alt="" />
        </div>
        <div>
          <p>{{ name }}</p>
          <p>{{ createdAt }}</p>
        </div>
      </div>
      <div class="close-and-options flex">
        <img
          src="https://res.cloudinary.com/dk9b84f0u/image/upload/v1674823484/Vuebook/elipsis_uwpcgu.png"
          alt="more"
        />
        <div>
          <button>
            <font-awesome-icon icon="fa-solid fa-x" />
          </button>
        </div>
      </div>
    </div>
    <div class="post-data">
      <div v-if="post.text" class="post-text">
        <pre>{{ post.text }}</pre>
      </div>
      <div v-if="post.imgUrl" class="post-img">
        <img :src="post.imgUrl" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    name() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
    createdAt() {
      const time = new Date(+this.post.createdAt);

      return time.toLocaleString("he-IL");
    },
  },
};
</script>

<style>
</style>
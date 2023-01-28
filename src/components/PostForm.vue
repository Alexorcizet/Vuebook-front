<template>
  <section v-if="user" class="post-page">
    <div class="post-form flex">
      <div class="form-header flex">
        <div class="flex">
          <p>Create post</p>
        </div>
        <div @click="closePost">
          <button>
            <font-awesome-icon icon="fa-solid fa-x" />
          </button>
        </div>
      </div>
      <hr />
      <div class="post-settings">
        <div class="form-info flex">
          <div class="form-img-container">
            <img :src="user.imgUrl" alt="user's img" />
          </div>
          <div class="post-audience">
            <p>{{ name }}</p>
            <div class="audience flex">
              <font-awesome-icon icon="fa-solid fa-earth-americas" />
              public
              <font-awesome-icon icon="fa-solid fa-caret-down" />
            </div>
          </div>
        </div>
        <div class="post-text-container">
          <div class="text-input-container">
            <pre
              class="post-text-area"
              contenteditable
              @input="setMsg"
              :data-placeholder="placeHolder"
            ></pre>
          </div>
          <div class="post-over-background-img flex">
            <div class="background-options">A</div>
            <div class="insert-emoji">😁</div>
          </div>
        </div>
        <div>
          <div class="add-to-post flex">
            <div><p>Add to your post</p></div>
            <div class="add-to-post-imgs flex">
              <div>
                <img
                  src="https://res.cloudinary.com/dk9b84f0u/image/upload/v1674823488/Vuebook/Gallery_lyphil.png"
                  alt="gallery"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dk9b84f0u/image/upload/v1674823485/Vuebook/user-tag_vpswc2.png"
                  alt="tagged-user"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dk9b84f0u/image/upload/v1674823485/Vuebook/smiley_cbd84a.jpg"
                  alt="😊"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dk9b84f0u/image/upload/v1674823485/Vuebook/location-mark_h2cvn7.png"
                  alt="location-mark"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dk9b84f0u/image/upload/v1674823484/Vuebook/BlueFlag_zxde2i.png"
                  alt="blue flag"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dk9b84f0u/image/upload/v1674823484/Vuebook/elipsis_uwpcgu.png"
                  alt="elipsis"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              @click="postIt"
              class="post-btn"
              :style="avaliable"
              :disabled="!isReady"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      img: "",
    };
  },
  methods: {
    setMsg(ev) {
      this.msg = ev.target.innerText;
    },
    async postIt() {
      console.log(this.msg);
      let newPost = {
        msg: this.msg,
        imgUrl: "",
        creator: this.user._id,
        creatorFirstName: this.user.firstName,
        creatorLastName: this.user.lastName,
      };
      await this.$store.dispatch({ type: "createPost", post: newPost });
      this.closePost();
    },
    closePost() {
      this.$emit("on-close-post", false);
    },
  },
  computed: {
    avaliable() {
      return {
        backgroundColor: this.msg ? "#1b74e4" : "",
        color: this.msg ? "white" : "gray",
      };
    },
    isReady() {
      return this.msg.length > 0;
    },
    user() {
      return this.$store.getters.user;
    },
    name() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
    placeHolder() {
      return `What's on your mind, ${this.user.firstName}?`;
    },
  },
};
</script>

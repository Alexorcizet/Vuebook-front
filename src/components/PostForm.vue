<template>
  <section class="post-page">
    <div class="post-form flex">
      <div class="form-header flex">
        <div class="flex">
          <p>Create post</p>
        </div>
        <div>
          <button><font-awesome-icon icon="fa-solid fa-x" /></button>
        </div>
      </div>
      <hr />
      <div class="post-settings">
        <div class="form-info flex">
          <div class="form-img-container">
            <img src="../assets/imgs/alex.jpg" alt="" />
          </div>
          <div class="post-audience">
            <p>Alex Hlebnikov</p>
            <div class="audience flex">
              <font-awesome-icon icon="fa-solid fa-earth-americas" />
              public
              <font-awesome-icon icon="fa-solid fa-caret-down" />
            </div>
          </div>
        </div>
        <div class="post-text-container">
          <div class="text-input-container">
            <p
              class="post-text-area"
              contenteditable
              @input="setMsg"
              data-placeholder="What's on your mind, Alex?"
            ></p>
          </div>
          <div class="post-over-background-img flex">
            <div class="background-options">A</div>
            <div class="insert-emoji">😁</div>
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
    };
  },
  created() {},
  methods: {
    setMsg(ev) {
      this.msg = ev.target.innerText;
    },
  },
};
</script>

<style>
</style>
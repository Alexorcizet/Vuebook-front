    <script>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import SideBar from "./components/LeftSideBar.vue";

export default {
  data() {
    return {};
  },
  async created() {
    await this.getUser();
    await this.getPosts();
  },
  methods: {
    getUser() {
      this.$store.dispatch({ type: "getUser" });
    },
    getPosts() {
      this.$store.dispatch({ type: "getPosts" });
    },
  },
  components: {
    AppHeader,
    SideBar,
  },
};
</script>

<template>
  <section class="main-layout">
    <AppHeader />
    <SideBar />
    <section class="main-content flex">
      <RouterView />
    </section>
  </section>
</template>






    <script>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import SideBar from "./components/LeftSideBar.vue";

export default {
  data() {},
  async created() {
    // this.user = this.user = await userService.getUser();
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






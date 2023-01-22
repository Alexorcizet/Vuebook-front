<template>
  <section class="app-header">
    <div class="logo">
      <router-link to="/"><h1>Vuebook</h1></router-link>
    </div>
    <div class="search-bar flex">
      <button class="search-btn">
        <font-awesome-icon icon="magnifying-glass" />
      </button>
      <input type="text" id="search" placeholder="Search Vuebook" />
    </div>
    <div class="header-icons flex">
      <button>
        <font-awesome-icon icon="fa-brands fa-facebook-messenger" />
      </button>
      <button>
        <font-awesome-icon icon="fa-solid fa-bell" />
      </button>
      <button>
        <font-awesome-icon icon="user" />
      </button>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
export default {};
</script>

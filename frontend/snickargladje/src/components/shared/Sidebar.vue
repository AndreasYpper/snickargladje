<template>
  <div class="sidebar-container" v-if="sidebar">
    <div class="nav-item collections">
      <router-link @click="closeSidebar()" :to="{ name: 'home' }" class="link"
        >Sortiment</router-link
      >
    </div>
    <div class="nav-item contact">
      <router-link
        @click="closeSidebar()"
        :to="{ name: 'contact' }"
        class="link"
        >Kontakt</router-link
      >
    </div>
    <div class="nav-item about">
      <router-link @click="closeSidebar()" :to="{ name: 'about' }" class="link"
        >Om</router-link
      >
    </div>
  </div>
</template>
<script>
import sidebarState from "@/modules/sidebar";
export default {
  setup() {
    const { closeSidebar, getSidebar } = sidebarState;
    const sidebar = getSidebar();

    return {
      closeSidebar,
      sidebar,
    };
  },
};
</script>
<style scoped>
.sidebar-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
}
.nav-item {
  margin: 0 0 0 0;
  color: #eae3ea;
  font-size: 6vw;
  text-align: left;
  margin: 5px;
}
.link {
  color: #eae3ea;
  text-decoration: none;
  cursor: pointer;
}
.collections {
  grid-column: 2 / 12;
  grid-row: 1;
}
.contact {
  grid-column: 2 / 12;
  grid-row: 2;
}
.about {
  grid-column: 2 / 12;
  grid-row: 3;
}
</style>
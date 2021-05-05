<template>
  <div class="navbar-container">
    <div class="mobile">
      <div class="logo">
        <Logo />
      </div>
      <div class="burger">
        <Burger />
      </div>
      <div class="sidebar-backdrop" @click="closeSidebar()" v-if="sidebar"></div>
      <transition name="slide-sidebar">
        <div class="sidebar" v-if="sidebar">
          <Sidebar />
        </div>
      </transition>
    </div>
    <div class="desktop">
      <div class="logo">
        <Logo />
      </div>
      <div class="nav-item collections">
        <p class="link" @click="toggleCollections()">Sortiment</p>
      </div>
      <div class="nav-item contact">
        <router-link :to="{ name: 'contact' }" class="link"
          >Kontakt</router-link
        >
      </div>
      <div class="nav-item about">
        <router-link :to="{ name: 'about' }" class="link">Om</router-link>
      </div>
      <transition name="collections-transition">
        <div class="collections-dropdown" v-if="collections_show">
          <CollectionsDropdown />
        </div>
      </transition>
    </div>
  </div>
</template>


<script>
import Logo from "@/components/shared/Logo";
import CollectionsDropdown from "@/components/shared/CollectionsDropdown";
import Burger from "@/components/shared/Burger";
import Sidebar from "@/components/shared/Sidebar";
import sidebarState from "@/modules/sidebar";
import { ref } from "vue";
export default {
  components: {
    Logo,
    CollectionsDropdown,
    Burger,
    Sidebar,
  },
  setup() {
    const { getSidebar, closeSidebar } = sidebarState;
    const sidebar = getSidebar();
    const collections_show = ref(false);

    function toggleCollections() {
      collections_show.value = !collections_show.value;
    }

    return {
      collections_show,
      sidebar,
      closeSidebar,
      toggleCollections,
    };
  },
};
</script>

<style scoped>
.navbar-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
}
.desktop {
  display: none;
}
.mobile {
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
}
.logo {
  grid-column: 5 / 9;
}
.burger {
  grid-column: 11 / 13;
  align-self: center;
}
.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}
.sidebar {
  overflow-y: auto;
  background-color: #778899;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 200px;
}
.slide-sidebar-enter-active,
.slide-sidebar-leave-active {
  transition: transform 0.2s ease;
}

.slide-sidebar-enter-from,
.slide-sidebar-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
@media (min-width: 600px) {
  .navbar-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  }
  .mobile {
    display: none;
  }
  .desktop {
    grid-column: 1 / 13;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  }
  .logo {
    grid-column: 1 / 3;
  }
  .nav-item {
    margin: 0 0 0 0;
    color: #eae3ea;
    justify-items: center;
    font-size: 1vw;
    justify-content: center;
    align-self: center;
  }
  .link {
    color: #eae3ea;
    text-decoration: none;
    cursor: pointer;
  }
  .link:hover {
    color: black;
  }
  .collections {
    grid-column: 3 / 5;
  }
  .contact {
    grid-column: 10 / 11;
  }
  .about {
    grid-column: 11 / 12;
  }
  .collections-dropdown {
    grid-column: 1 / 13;
    grid-row: 2;
    background-color: #dfe6ee;
  }
}
</style>
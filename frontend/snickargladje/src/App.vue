<template>
  <div class="app-container">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/shared/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.app-container {
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr auto;
  background-color: #fff;
}
.navbar {
  grid-row: 1;
  grid-column: 1 / 13;
  background-color: #778899;
}
.content {
  grid-row: 2;
  grid-column: 1 / 13;
  font-size: 1.1vw;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
}
.footer {
  grid-row: 3;
}
</style>

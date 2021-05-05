<template>
  <div class="logo-container">
    <router-link :to="{ name: 'home' }" class="logo">
      <p>Logo</p>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo-container {
  color: #a7b3a5;
  font-size: 5vw;
}
.logo {
  color: #a7b3a5;
  font-size: 5vw;
  text-decoration: none;
}
@media (min-width: 600px) {
  .logo-container {
    color: #a7b3a5;
    font-size: 1.3vw;
  }
  .logo {
    color: #a7b3a5;
    font-size: 1.3vw;
    text-decoration: none;
  }
}
</style>
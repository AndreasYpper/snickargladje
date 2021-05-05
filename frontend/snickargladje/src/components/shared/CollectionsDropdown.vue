<template>
  <div class="collections-dropdown-container">
    <h3 class="consoles item">Konsoller</h3>
    <h3 class="window-lining item">Fönsterfoder</h3>
    <h3 class="porch item">Veranda</h3>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.collections-dropdown-container {
  background-color: #dfe6ee;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  height: 15vh;
  align-items: center;
}
.consoles {
  grid-column: 3 / 5;
}
.window-lining {
  grid-column: 6 / 8;
}
.porch {
  grid-column: 9 / 11;
}
.item {
  cursor: pointer;
}
</style>
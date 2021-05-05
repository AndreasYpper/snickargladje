<template>
  <div class="about-container">
    <div class="header">
      <h1>Om "företagsnamn"</h1>
    </div>
    <div class="about-card">
      <div class="text">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-container {
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 6vh;
}
.about-card {
  grid-column: 1 / 13;
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
.header {
  grid-column: 3 / 11;
  grid-row: 1;
  text-align: left;
  font-size: 3vw;
}
.text {
  grid-column: 3 / 11;
  text-align: left;
  font-size: 4vw;
}
@media (min-width: 600px) {
  .about-container {
    grid-column: 1 / 13;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 10vh;
  }
  .about-card {
    grid-column: 1 / 13;
    grid-row: 2;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  .header {
    grid-column: 3 / 11;
    grid-row: 1;
    text-align: left;
    font-size: 1vw;
  }
  .text {
    grid-column: 3 / 11;
    text-align: left;
    font-size: 1vw;
  }
}
</style>
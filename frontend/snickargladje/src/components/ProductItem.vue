<template>
  <div class="product-item-container">
    <div class="header">
      <h1>Produkt namn</h1>
    </div>
    <div class="image-container">
      <img
        class="image"
        src="https://dl.dropboxusercontent.com/s/g4y93kq2h6qbs4n/test.svg?dl=0"
      />
    </div>
    <div class="description">
      <p>
        Produkt beskrivning ..... "Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua."
      </p>
    </div>
    <div class="button-group">
      <router-link class="back-link" :to="{ name: 'home' }">
        <button class="back-btn">Tillbaka</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.product-item-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
}
.header {
  grid-column: 2 / 12;
  grid-row: 1;
  text-align: center;
  font-size: 4vw;
}
.image-container {
  grid-column: 2 / 12;
  grid-row: 2;
}
.image {
  width: 60vw;
}
.description {
  grid-column: 2 / 12;
  grid-row: 3;
  text-align: left;
  font-size: 3vw;
}
.button-group {
  grid-column: 2 / 12;
  grid-row: 4;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
}
.back-link {
  grid-column: 9 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  text-decoration: none;
}
.back-btn {
  grid-column: 1 / 13;
  font-family: "Lato", sans-serif;
  font-size: 3vw;
  border: none;
  background-color: #b56357;
  color: #fff;
  padding: 5px 8px 5px 8px;
  border-radius: 5px;
  cursor: pointer;
}
.back-btn:hover {
  background-color: #cf7e72;
}
.back-btn:active {
  transform: translateY(2px);
}
@media (min-width: 600px) {
  .product-item-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto;
  }
  .header {
    grid-column: 3 / 11;
    grid-row: 1;
    text-align: left;
    font-size: 1.3vw;
  }
  .image-container {
    grid-column: 3 / 11;
    grid-row: 2;
  }
  .image {
    width: 50vw;
  }
  .description {
    grid-column: 3 / 11;
    grid-row: 3;
    text-align: left;
    font-size: 1.2vw;
  }
  .button-group {
    grid-column: 3 / 11;
    grid-row: 4;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  }
  .back-link {
    grid-column: 11 / 13;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    text-decoration: none;
  }
  .back-btn {
    grid-column: 1 / 13;
    font-family: "Lato", sans-serif;
    font-size: 1.3vw;
    border: none;
    background-color: #b56357;
    color: #fff;
    padding: 5px 8px 5px 8px;
    border-radius: 5px;
    cursor: pointer;
  }
  .back-btn:hover {
    background-color: #cf7e72;
  }
  .back-btn:active {
    transform: translateY(2px);
  }
}
</style>
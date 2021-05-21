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
    <div class="specefications">
      <h2>Specfikation</h2>
      <p><b>Material:</b> Furu</p>
      <p><b>Tjocklek:</b> 10mm</p>
      <p><b>Osv:</b> Osv</p>
    </div>
    <div class="description">
      <h2>Produkt beskrivning</h2>
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
.specefications {
  grid-column: 2 / 12;
  grid-row: 4;
  text-align: left;
}
.button-group {
  grid-column: 2 / 12;
  grid-row: 5;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
}
.specefications h2 {
  font-size: 3vw;
  border-bottom: #eae3ea solid 2px;
}
.specefications p {
  border-bottom: #eae3ea solid 1px;
  font-size: 2vw;
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
    grid-column: 2 / 11;
    grid-row: 1;
    text-align: left;
    font-size: 1.3vw;
  }
  .image-container {
    grid-column: 2 / 7;
    grid-row: 2;
    border: #eae3ea solid 1px;
  }
  .image {
    width: 40vw;
  }
  .specefications {
    grid-column: 8 / 11;
    grid-row: 2;
    text-align: left;
  }
  .specefications h2 {
    font-size: 1.5vw;
    border-bottom: #eae3ea solid 2px;
  }
  .specefications p {
    border-bottom: #eae3ea solid 1px;
    font-size: 0.8vw;
  }
  .description {
    grid-column: 2 / 7;
    grid-row: 3;
    text-align: left;
    font-size: 1vw;
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
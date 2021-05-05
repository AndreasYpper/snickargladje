<template>
  <div class="item-container">
    <div class="card">
      <div class="card-image">
        <img
          class="image"
          src="https://dl.dropboxusercontent.com/s/g4y93kq2h6qbs4n/test.svg?dl=0"
        />
      </div>
      <div class="card-header">
        <h2>Produkt titel</h2>
      </div>
      <div class="card-content">
        <p>
          Produkt beskrivning ..... "Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua."
        </p>
      </div>
      <div class="card-button">
        <button>Mer info</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  margin: 10px 10px 10px 10px;
}
.card {
  grid-column: 1 / 13;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  background-color: #fff;
  border-radius: 10px;
  border: solid #eae3ea 1px;
}
.card-image {
  margin: 10px 0 0 0;
  padding-bottom: 10px;
  grid-column: 1 / 13;
  grid-row: 1;
  background-color: #fff;
  border-bottom: #eae3ea solid 1px;
}
.image {
  width: 40vw;
}
.card-header {
  grid-column: 2 / 12;
  grid-row: 2;
  text-align: left;
  font-size: 4vw;
  color: #a7b3a5;
}
.card-header h2 {
  margin: 10px 0 10px 0;
}
.card-content {
  grid-column: 2 / 12;
  grid-row: 3;
  text-align: left;
  font-size: 3vw;
}
.card-button {
  grid-column: 4 / 10;
  grid-row: 4;
}
.card-button button {
  width: 100%;
  margin: 10px 0 20px 0;
  background-color: #b4dbc0;
  border: none;
  height: 7vw;
  font-size: 4vw;
  cursor: pointer;
  border-radius: 5px;
}

@media (min-width: 600px) {
  .item-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    margin: 10px 10px 10px 10px;
  }
  .card {
    grid-column: 1 / 13;
    grid-row: 1;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    background-color: #fff;
    border-radius: 10px;
    border: solid #eae3ea 1px;
  }
  .card-image {
    margin: 10px 0 0 0;
    padding-bottom: 10px;
    grid-column: 1 / 13;
    grid-row: 1;
    background-color: #fff;
    border-bottom: #eae3ea solid 1px;
  }
  .image {
    width: 13vw;
  }
  .card-header {
    grid-column: 2 / 12;
    grid-row: 2;
    text-align: left;
    font-size: 0.8vw;
    color: #a7b3a5;
  }
  .card-header h2 {
    margin: 10px 0 10px 0;
  }
  .card-content {
    grid-column: 2 / 12;
    grid-row: 3;
    text-align: left;
    font-size: 0.9vw;
  }
  .card-button {
    grid-column: 2 / 12;
    grid-row: 4;
  }
  .card-button button {
    width: 100%;
    height: 2.4vw;
    margin: 10px 0 20px 0;
    background-color: #b4dbc0;
    border: none;
    font-size: 1.2vw;
    cursor: pointer;
    border-radius: 10px;
  }
}
</style>
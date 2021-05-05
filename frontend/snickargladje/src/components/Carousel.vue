<template>
  <div class="carousel-container">
    <div class="carousel-content">
      <div class="content-item">
        <h2>-Egen design</h2>
      </div>
      <div class="content-item">
        <h2>-Färdiga mallar</h2>
      </div>
      <div class="content-item">
        <h3>-Handgjort från Öckerö</h3>
      </div>
    </div>
    <div class="carousel-image">
      <img
        class="image"
        src="https://dl.dropboxusercontent.com/s/g4y93kq2h6qbs4n/test.svg?dl=0"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-container {
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  border-bottom: #eae3ea solid 1px;
}
.carousel-content {
  grid-column: 2 / 7;
  align-self: center;
  text-align: left;
  font-size: 2.8vw;
}
.carousel-image {
  grid-column: 7 / 12;
  margin: 10px;
}
.image {
  width: 45vw;
}
@media (min-width: 600px) {
  .carousel-container {
    background-color: #fff;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    border-bottom: #eae3ea solid 1px;
  }
  .carousel-content {
    grid-column: 2 / 7;
    align-self: center;
    text-align: left;
    font-size: 1.3vw;
  }
  .carousel-image {
    grid-column: 7 / 12;
    margin: 10px;
  }
  .image {
    width: 30vw;
  }
}
</style>
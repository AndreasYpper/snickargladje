<template>
  <div class="home-container">
    <div class="carousel">
      <Carousel />
    </div>
    <div class="card1">
      <ProductCard />
    </div>
    <div class="card2">
      <ProductCard />
    </div>
    <div class="card3">
      <ProductCard />
    </div>

    <div class="card4">
      <ProductCard />
    </div>
    <div class="card5">
      <ProductCard />
    </div>
    <div class="card6">
      <ProductCard />
    </div>
    <div class="card7">
      <ProductCard />
    </div>
    <div class="card8">
      <ProductCard />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
export default {
  components: {
    Carousel,
    ProductCard,
  },
};
</script>

<style scoped>
.home-container {
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
}
.carousel {
  margin: 30px 0 20px 0;
  grid-column: 1 / 13;
  grid-row: 1;
}
.card1 {
  grid-column: 3 / 11;
  grid-row: 2;
}
.card2 {
  grid-column: 3 / 11;
  grid-row: 3;
}
.card3 {
  grid-column: 3 / 11;
  grid-row: 4;
}
.card4 {
  grid-column: 3 / 11;
  grid-row: 5;
}
.card5 {
  grid-column: 3 / 11;
  grid-row: 6;
}
.card6 {
  grid-column: 3 / 11;
  grid-row: 7;
}
.card7 {
  grid-column: 3 / 11;
  grid-row: 8;
}
.card8 {
  grid-column: 3 / 11;
  grid-row: 9;
}
@media (min-width: 600px) {
  .home-container {
    grid-column: 1 / 13;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  }
  .carousel {
    grid-column: 1 / 13;
    grid-row: 1;
  }
  .card1 {
    grid-column: 3 / 5;
    grid-row: 2;
  }
  .card2 {
    grid-column: 5 / 7;
    grid-row: 2;
  }
  .card3 {
    grid-column: 7 / 9;
    grid-row: 2;
  }
  .card4 {
    grid-column: 9 / 11;
    grid-row: 2;
  }
  .card5 {
    grid-column: 3 / 5;
    grid-row: 3;
  }
  .card6 {
    grid-column: 5 / 7;
    grid-row: 3;
  }
  .card7 {
    grid-column: 7 / 9;
    grid-row: 3;
  }
  .card8 {
    grid-column: 9 / 11;
    grid-row: 3;
  }
}
</style>
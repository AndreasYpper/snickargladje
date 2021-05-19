<template>
  <div class="product-container">
    <div class="product-item">
      <ProductItem />
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";
export default {
  components: {
    ProductItem,
  },
};
</script>

<style scoped>
.product-container {
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
}
.product-item {
  grid-column: 2 / 12;
  grid-row: 1;
}
@media (min-width: 600px) {
  .product-container {
    grid-column: 1 / 13;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  }
  .product-item {
    grid-column: 1 / 13;
    grid-row: 1;
  }
}
</style>
<template>
  <div class="contact-card-container">
    <div class="card">
      <p><b>E-post:</b> info@epost.se</p>
      <p>
        <b>Telefon:</b> Endast lördagar mellan 11.00 - 15.00 på nummer 07x-xx xx
        xxx
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-card-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
}
.card {
  grid-column: 1 / 13;
  text-align: left;
}
.card p {
  font-size: 2.5vw;
  padding: 10px;
  border-bottom: solid #eae3ea 1px;
}
@media (min-width: 600px) {
  .contact-card-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  }
  .card {
    grid-column: 3 / 13;
    text-align: left;
  }
  .card p {
    font-size: 1vw;
    padding: 10px;
    border-bottom: solid #eae3ea 1px;
  }
}
</style>
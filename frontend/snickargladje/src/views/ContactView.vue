<template>
  <div class="contact-container">
    <div class="header">
      <h1>Kontakta oss</h1>
    </div>
    <div class="form-wrapper">
      <form class="contact-form">
        <label class="form-label">Namn</label>
        <input class="form-input" type="text" />
        <label class="form-label">E-post</label>
        <input class="form-input" type="text" />
        <label class="form-label">Telefonnummer</label>
        <input class="form-input" type="text" />
        <!-- <input class="form-input" type="text" placeholder="Förnamn" />
        <input class="form-input" type="text" placeholder="Efternamn" />
        <input class="form-input" type="text" placeholder="Epost" />
        <input class="form-input" type="text" placeholder="Telefonnummer" /> -->
        <label class="form-label"> Meddelande: </label>
        <textarea class="form-input message" rows="6" cols="20" />
        <div class="button-group">
          <button class="send-button">Skicka</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-container {
  margin: 20px;
  grid-column: 2 / 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 7vh auto;
  border: #eae3ea solid 3px;
  border-radius: 10px;
}
.header {
  grid-column: 2 / 12;
  grid-row: 1;
  text-align: left;
  font-size: 3vw;
}
.form-wrapper {
  grid-column: 1 / 13;
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  text-align: left;
}
.contact-form {
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 3vh;
}
.form-label {
  grid-column: 2 / 12;
  font-size: 3vw;
  align-self: center;
  text-align: left;
  margin: 0 0 0 10px;
}
.form-input {
  margin: 0 5px 0 5px;
  grid-column: 2 / 12;
  text-align: left;
  font-size: 4vw;
  height: 30px;
  padding-left: 10px;
  border-radius: 5px;
  border: 2px solid #eae3ea;
}
.message {
  height: auto;
}
.button-group {
  margin: 5px;
  grid-column: 2 / 12;
  grid-row: 10;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
}
.send-button {
  font-family: "Lato", sans-serif;
  font-size: 4vw;
  grid-column: 2 / 12;
  background-color: #a7b3a5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.send-button:hover {
  background-color: #b4dbc0;
}
.send-button:active {
  transform: translateY(2px);
}
@media (min-width: 600px) {
  .contact-container {
    margin: 20px;
    grid-column: 5 / 9;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 10vh auto;
    border: #eae3ea solid 3px;
    border-radius: 10px;
  }
  .header {
    grid-column: 2 / 7;
    grid-row: 1;
    text-align: left;
    font-size: 0.8vw;
  }
  .form-wrapper {
    grid-column: 1 / 13;
    grid-row: 2;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    text-align: left;
  }
  .contact-form {
    grid-column: 1 / 13;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  }
  .form-label {
    grid-column: 2 / 12;
    font-size: 1.2vw;
    align-self: center;
    text-align: left;
    margin: 0 0 0 10px;
  }
  .form-input {
    margin: 0 10px 0 10px;
    grid-column: 2 / 12;
    text-align: left;
    font-size: 1.2vw;
    height: 40px;

    padding-left: 10px;
    border-radius: 5px;
    border: 2px solid #eae3ea;
  }
  .message {
    height: auto;
  }
  .button-group {
    margin: 15px;
    grid-column: 2 / 12;
    grid-row: 10;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  }
  .send-button {
    font-family: "Lato", sans-serif;
    font-size: 1.3vw;
    grid-column: 4 / 10;
    background-color: #a7b3a5;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .send-button:hover {
    background-color: #b4dbc0;
  }
  .send-button:active {
    transform: translateY(2px);
  }
}
</style>
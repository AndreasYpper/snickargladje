<template>
  <div class="contact-container">
    <div class="contact-info">
      <div class="header">
        <h1>Kontakt</h1>
      </div>
      <div class="info">
        <p>
          Innan ni kontaktar oss se gärna nedan på vanliga frågor om din fråga
          besvaras där, annars kan du kontakta oss genom formuläret nedan, på
          telefon eller på e-post.
        </p>
      </div>
      <div class="card">
        <ContactCard />
      </div>
    </div>

    <div class="contact-form">
      <ContactForm />
    </div>
    <div class="questions">
      <div class="question" v-for="question in questions" :key="question">
        <Questions :question="question" />
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import Questions from "@/components/Questions";
import { reactive } from "vue";
export default {
  components: {
    ContactCard,
    ContactForm,
    Questions,
  },
  setup() {
    const questions = reactive([
      {
        question: "fråga 1",
        answer: "svar 1",
      },
      {
        question: "fråga 2",
        answer: "svar 2",
      },
      {
        question: "fråga 3",
        answer: "svar 3",
      },
    ]);

    return {
      questions,
    };
  },
};
</script>

<style scoped>
.contact-container {
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
}
.contact-info {
  grid-row: 1;
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
}
.header {
  grid-column: 1 / 13;
  grid-row: 1;
  font-size: 3.5vw;
  border-bottom: solid #eae3ea 1px;
}
.info {
  grid-column: 2 / 12;
  grid-row: 2;
  font-size: 3vw;
  text-align: left;
}
.card {
  grid-column: 2 / 12;
  grid-row: 3;
}
.contact-form {
  grid-column: 2 / 12;
  grid-row: 3;
}
.questions {
  grid-column: 2 / 12;
  grid-row: 2;
}
@media (min-width: 600px) {
  .contact-container {
    grid-column: 1 / 13;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  }
  .contact-info {
    grid-column: 2 / 12;
    grid-row: 1;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  .header {
    grid-column: 1 / 13;
    grid-row: 1;
    text-align: left;
    border-bottom: solid #eae3ea 1px;
    font-size: 1vw;
  }
  .info {
    grid-column: 2 / 6;
    grid-row: 2;
    text-align: left;
    font-size: 1vw;
  }
  .card {
    grid-column: 6 / 12;
    grid-row: 2;
  }
  .contact-form {
    grid-column: 3 / 6;
    grid-row: 3;
  }
  .questions {
    grid-column: 6 / 11;
    grid-row: 3;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: min-content min-content;
    margin-top: 10px;
  }
  .question {
    grid-column: 1 / 13;
    grid-row: auto;
  }
}
</style>

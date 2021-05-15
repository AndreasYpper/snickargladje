<template>
  <div class="contact-container">
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
import ContactForm from "@/components/ContactForm";
import Questions from "@/components/Questions";
import { reactive } from "vue";
export default {
  components: {
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
.contact-form {
  grid-column: 2 / 12;
  grid-row: 2;
}
.questions {
  grid-column: 2 / 12;
  grid-row: 1;
}
@media (min-width: 600px) {
  .contact-container {
    grid-column: 1 / 13;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  }
  .contact-form {
    grid-column: 2 / 5;
    grid-row: 1;
  }
  .questions {
    grid-column: 6 / 12;
    grid-row: 1;
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

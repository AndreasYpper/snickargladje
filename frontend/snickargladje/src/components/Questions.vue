<template>
  <div class="questions-container">
    <div class="question">
      <div class="text" @click="toggle()">
        {{ question.question }}
      </div>
      <transition name="flip-arrow">
        <div class="arrow-area" @click="toggle()">
          <i class="arrow"></i>
        </div>
      </transition>
      <div class="answer" v-if="show_answer">
        {{ question.answer }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const show_answer = ref(false);

    function toggle() {
      show_answer.value = !show_answer.value;
    }

    return {
      show_answer,
      toggle,
    };
  },
};
</script>

<style scoped>
.questions-container {
  grid-column: 1 / 13;
  grid-row: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: min-content min-content min-content;
}
.question {
  grid-column: 2 / 12;
  border: #eae3ea solid 1px;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-top: 10px;
  font-size: 4vw;
  align-items: center;
}
.text {
  grid-column: 2 / 12;
  padding: 8px;
}
.arrow-area {
  grid-column: 12 / 13;
}
.arrow {
  border: solid #9b989b;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
}
.answer {
  grid-column: 1 / 13;
  background-color: #eae3ea;
  padding: 8px;
}
.flip-arrow-enter-active,
.flip-arrow-leave-active {
  transition: transform 0.2s ease;
}

.flip-arrow-enter-from,
.flip-arrow-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
@media (min-width: 600px) {
  .questions-container {
    grid-column: 1 / 13;
    grid-row: auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: min-content min-content min-content;
  }
  .question {
    grid-column: 2 / 12;
    border: #eae3ea solid 1px;
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-top: 10px;
    font-size: 1vw;
    align-items: center;
  }
  .text {
    grid-column: 2 / 12;
    padding: 8px;
  }
  .arrow-area {
    grid-column: 12 / 13;
  }
  .arrow {
    border: solid #9b989b;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
  }
  .answer {
    grid-column: 1 / 13;
    background-color: #eae3ea;
    padding: 8px;
  }
  .flip-arrow-enter-active,
  .flip-arrow-leave-active {
    transition: transform 0.2s ease;
  }

  .flip-arrow-enter-from,
  .flip-arrow-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s;
  }
}
</style>
<template>
  <div>
    <ScoreBoard :winCount="this.winCount" :loseCount="this.loseCount" />
    <template v-if="this.question">
      <h1 v-html="this.question"></h1>
      <template v-for="(answer, index) in this.answers" :key="index">
        <input
          :disabled="this.answerSubmitted"
          :id="index"
          type="radio"
          name="options"
          :value="answer"
          v-model="this.chosenAnswer"
        />
        <label :for="index" v-html="answer"></label><br />
      </template>
      <button
        v-if="!this.answerSubmitted"
        @click="this.submitAnswer()"
        class="send"
        type="button"
      >
        Send
      </button>
    </template>
    <section class="result" v-if="this.answerSubmitted">
      <h4
        v-if="this.chosenAnswer == this.correctAnswer"
        v-html="
          '&#9989; Conglatulations, the answer ' +
          this.chosenAnswer +
          ' is correct.'
        "
      ></h4>
      <h4
        v-else
        v-html="
          '&#10060; I´m sorry, you picket the wrong answer. The correct is ' +
          this.correctAnswer +
          '.'
        "
      ></h4>
      <button @click="this.getNewQuestion()" class="send" type="button">
        Next Question
      </button>
    </section>
  </div>
</template>

<script>
import ScoreBoard from "@/components/ScoreBoard.vue";
export default {
  name: "App",
  components: {
    ScoreBoard,
  },
  data() {
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      chosenAnswer: undefined,
      answerSubmitted: false,
      winCount: 0,
      loseCount: 0,
    };
  },
  computed: {
    answers() {
      var answers = [...this.incorrectAnswers];
      answers.splice(
        Math.round(Math.random() * answers.length),
        0,
        this.correctAnswer
      );

      return answers;
    },
  },
  methods: {
    submitAnswer() {
      if (!this.chosenAnswer) {
        alert("Please, select a answer");
        return;
      }

      this.answerSubmitted = true;

      if (this.chosenAnswer == this.correctAnswer) {
        this.winCount++;
      } else {
        this.loseCount++;
      }
    },
    getNewQuestion() {
      try {
        this.axios
          .get("https://opentdb.com/api.php?amount=1&category=18")
          .then((response) => {
            this.question = response.data.results[0].question;
            this.incorrectAnswers = response.data.results[0].incorrect_answers;
            this.correctAnswer = response.data.results[0].correct_answer;
          });

        this.answerSubmitted = false;
        this.chosenAnswer = undefined;
        this.question = undefined;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getNewQuestion();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 960px;

  input[type="radio"] {
    margin: 12px 4px;
  }

  button.send {
    margin-top: 12px;
    height: 40px;
    min-width: 120px;
    padding: 0 16px;
    color: #fff;
    background-color: #1867c0;
    border: 1px solid #1867c0;
    cursor: pointer;
  }
}
</style>
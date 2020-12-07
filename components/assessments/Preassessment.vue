<template>
<div>
  <div class="pre-assessment-questions" v-show="this.$store.getters.getPreassessmentCompleted === false">
  <div v-for="(question, index) in questionsObject" :key="question.id">
    <div v-show="index === questionIndex">
      <h2>{{ question.text }}</h2>
      <ol class="answerButton">
        <li v-for="answer in question.answers" :key="answer.text">
          <label class="grey-label">
            <input type="radio" 
                   v-bind:value="!answer.correct"
                   v-bind:name="index"
                   v-model="userResponses[index]">
                   <span>{{answer.text}}</span>
          </label>
        </li>
      </ol>
  </div>
  <div v-show="questionIndex === questionsLength">
    <h2>
    Quiz finished
  </h2>
    <p v-if="questionIndex === questionsLength">
      You failed the following lessons: {{ score() }}
    </p>
  </div>

  </div>
  <div class="navigation">
        <img class="nav-left-preassessment" src="../../assets/left-arrow.svg" v-if="questionIndex > 0" v-on:click="prev">
        <img class="nav-right-preassessment" src="../../assets/right-arrow.svg" v-on:click="next">
  </div>
  </div>
</div>  
</template>

<script>
export default {
    computed: {
        questionsObject() {
            return this.$store.getters.getPreassessmentQuestions
        },
        questionsLength() {
            return this.$store.getters.getPreassessmentQuestions.length
        },

    },
    data () {
        return {
            questionIndex: 0,
            userResponses: [],
            isActive: true
        }
    },
      methods: {
        next: function() {
        this.questionIndex++;
        },
        prev: function() {
        this.questionIndex--;
        },
        score: function() {
          let failedLessons = []
          this.userResponses.forEach((el, index) => {
            if (el == true) {
              let failedLesson = this.questionsObject[index].lesson;
              failedLessons.push(failedLesson)
            }
          });
          for (let i = 1; i <= this.$store.getters.getLessons.length; i++) {
            if (!failedLessons.includes(i)) {
              this.$store.commit('preLessonPassed',{'lessonid': i});
            }
          };
          this.$store.commit('preassessmentCompleted');
          let uniqueFailed = [...new Set(failedLessons)];
          return uniqueFailed;
        }
    }

}
</script>

<style scoped>

.pre-assessment-questions {
  width:80%;
  height:70%;
  position:absolute;
  top:0%;
  left:10%;
  right: 10%;
  text-align: center;
  color: white;
  font-size: 30px;
  display: inline-block;

}

.nav-left-preassessment {
  width: 50px;
  position: absolute;
  bottom:-5em;
  right:-13em;
}
.nav-right-preassessment {
  width: 50px;
  position:absolute;
  bottom: -5em;
  right:-15em;
} 

li {
  margin: 20px;
  text-align: center;
  list-style-type: none;
  font-size: .5em
}


</style>
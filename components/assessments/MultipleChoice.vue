<template>
  <div>
  <div v-for="(question, index) in questionsObject" :key="question.id">
    <div v-show="(index === $parent.slide-1) && !($parent.slide === questionsLength)+1">
      <h2>{{ question.text }}</h2>
      <ol class="answerButton">
        <li v-for="answer in question.answers" :key="answer.text">
          <label class="grey-label">
            <input type="radio" 
                   v-bind:value="answer.correct" 
                   v-bind:name="index" 
                   v-model="userResponses[index]"> 
                   <span>{{answer.text}}</span>
          </label>
        </li>
      </ol>
    </div>
  </div>
  <div v-show="$parent.slide === questionsLength+1">
    <h2>
    Quiz finished
  </h2>

    <p>
      Total score: {{ score() }} / {{ questionsLength }}
    </p>
    <router-link :to="{ name: 'home'}">Click here to return home</router-link>
  </div>

  </div>
</template>

<script>
export default {
    computed: {
        currentLessonId() {
            return this.$route.params.lessonid;
        }, 
        questionsObject() {
            return this.$store.getters.getQuestionsByLesson(this.currentLessonId)
        },
        questionsLength() {
            return this.$store.getters.getQuestionsByLesson(this.currentLessonId).length
        }
    },
    data () {
        return {
            userResponses: Array(this.questionsLength).fill(false)
        }
    },
      methods: {
        score: function() {
          let correct = this.userResponses.filter(function(val) { return val }).length;
          let total = this.questionsLength;
          if (correct/total == 1) {
            this.$store.commit('markLessonAsPassed',{'lessonid': this.currentLessonId});
          }
          this.$store.commit('markLessonAsAttempted',{'lessonid': this.currentLessonId});
          return this.userResponses.filter(function(val) { return val }).length;
        }
    },
    watch: {
      $route: {
        immediate: true,
        handler($route) {
          console.log($route)
          if ($route.params.lessonid) {
            console.log($route.params.lessonid)
              this.pageTitle = this.$store.getters.getLessonTitle($route.params.lessonid);
              console.log(this.pageTitle);
          } 
          }}
    },

}
</script>

<style>

</style>
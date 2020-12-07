<template>
  <div>
<<<<<<< HEAD:src/pages/lesson2/slideEnd.vue
    <p v-show="this.$store.getters.getLessonPassed(currentLessonId)">You have already successfully passed this lesson's assessment.</p>
=======
        <p v-show="this.$store.getters.getLessonPassed(currentLessonId)">You have already successfully passed this lesson's assessment.</p>
>>>>>>> main:src/pages/lesson3/slide12.vue
    <p v-show="this.$store.getters.getLessonPassed(currentLessonId) === false && this.$store.getters.getLessonAttempted(currentLessonId) === true">You have already attempted this lesson's assessment.</p>
    <p v-show="this.$store.getters.getLessonPassed(currentLessonId) === false && this.$store.getters.getLessonAttempted(currentLessonId) === false">You're ready for the assessment! Note: This lecture will not be available during the assessment. </p>
    <router-link :to="{ name: 'lessonassessment', params: { lessonid: currentLessonId }}"><button @click="finishLecture" v-show="this.$store.getters.getLessonPassed(currentLessonId) === false && this.$store.getters.getLessonAttempted(currentLessonId) === false">Click to begin assessment</button></router-link>
 
  </div>

</template>

<script>

export default {
  data() {
    return {
      title: 'Assessment'
    }
  },
  computed: {
    currentLessonId() {
        return this.$route.params.lessonid;
    },
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title);
        this.$store.commit('markLectureParsed',{'lessonid': this.currentLessonId});
  },
  components: {
  },
}
</script>
<template>
      <div class="navigation">
        <img class="nav-left" src="../../assets/left-arrow.svg" v-if="($parent.slide > 1) && $parent.slide < contentLength" v-on:click="$emit('prev')">
        <img class="nav-right" src="../../assets/right-arrow.svg" v-on:click="$emit('next');" v-if="$parent.slide < contentLength">
    </div>
</template>

<script>
export default {
    data() {
      return {
      }
    },
    emits: [
      'next',
      'prev'
    ],
    computed: {
        contentLength() {
          if (this.$parent.type == 'lecture') {
              return this.$store.getters.getLessonLength(this.currentLessonId)
          } else if (this.$parent.type == 'assessment'){
              return this.$store.getters.getQuestionsByLesson(this.currentLessonId).length+1
          } else {
            console.log('there has been an error calculating contentLength')
          }
        },
        currentLessonId() {
            return this.$route.params.lessonid;
        },  
    },
    watch: {

    },

}
</script>

<style scoped>


</style>



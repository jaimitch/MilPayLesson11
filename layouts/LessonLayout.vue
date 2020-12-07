<template>
  <div id="app">
  <milpay-header />
  <div  class="main-content">

    <p v-if="this.$store.getters.getLessonPassed(currentLessonId)">You have successfully completed this lesson in the pre-assessment.</p>
    </div>

  </div>
</template> 

<script>
import Header from '../components/header/Header'



export default {
  components: {
    'milpay-header': Header 
  }, 
    computed: {
        currentLessonId() {
            return this.$route.params.lessonid;
        } 
    },
    data () {
      return {
         isHidden: false
      }
    },
    props: {
        lessonid: { type: String},
    },
    methods: {
      hide() {
        this.isHidden = true
      }
    }
}
</script>

<style>

</style>
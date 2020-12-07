<template>
  <div id="app">
  <milpay-header />
    <div class="pre-assessment">
    <pre-assessment v-show="showPreassessment"/>
    <h1 @click="preassessmentClick()" v-show="showPreassessmentButton">Students must complete the pre-assessment before accessing course material. <br>Click here to begin!</h1>
    </div>
    <br>
    <div v-show="showLessons" class="lesson-menu flex-container">
      <div class="row">
      <div class="column">
        <p v-for="item in [1,2,3,4,5,6,7,8]" :key="item.message">
          <router-link :to="{ name: 'lessonlecture', params: { lessonid: item }}">

            <div style="float:left" class="blue-box"> &nbsp;</div>
            <div style="float:left; text-indent: .3em">LESSON {{item}}</div>
            <div style="text-indent: 2.5em">{{this.$store.getters.getLessonTitle(item)}}<img src="../assets/checkbox.svg" style="width:20px; height:20px; float:right;" v-if="this.$store.getters.getLessonPassed(item) === true"></div>
          </router-link>
        </p>
      </div>
 <div class="column" style="max-width:8%"></div>
      <div class="column">
        <p v-for="item in [9]" :key="item.message">
          <router-link :to="{ name: 'lessonlecture', params: { lessonid: item }}">
            <div style="float:left" class="blue-box"> &nbsp;</div>
            <div style="float:left; text-indent: .5em">LESSON {{item}}</div>
            <div style="text-indent: 4.1em">{{this.$store.getters.getLessonTitle(item)}}<img src="../assets/checkbox.svg" style="width:20px; height:20px; float:right;" v-if="this.$store.getters.getLessonPassed(item) === true"></div>
          </router-link></p>
        <p v-for="item in [10,11,12,13,14,15,16]" :key="item.message">
          <router-link :to="{ name: 'lessonlecture', params: { lessonid: item }}">
            <div style="float:left" class="blue-box"> &nbsp;</div>
            <div style="float:left; text-indent: .5em">LESSON {{item}}</div>
            <div style="text-indent: 4em">{{this.$store.getters.getLessonTitle(item)}}<img src="../assets/checkbox.svg" style="width:20px; height:20px; float:right;" v-if="this.$store.getters.getLessonPassed(item) === true"></div>
          </router-link>
            
        </p>
      </div>
    </div>
    <router-view />
    </div>
  </div>
</template>

 
<script>
import Preassessment from '../components/assessments/Preassessment'
import Header from '../components/header/Header'

export default {
  components: {
    'pre-assessment': Preassessment,
    'milpay-header': Header 
  }, 
  computed: {
    showLessons () {
      return this.$store.getters.getShowLessons
    },
    preassessmentCompleted () {
      return this.$store.getters.getPreassessmentCompleted
    },
    showPreassessment () {
      return this.$store.getters.getShowPreassessment
    },
    showPreassessmentButton () {
      return this.$store.getters.getShowPreassessmentButton
    },
            currentLessonId() {
            return this.$route.params.lessonid;
        } 
  },
  data () {
    return {
      // lessonCompleted: true
    }
  },
  methods: {
    preassessmentClick: function() {
      this.$store.commit('preassessmentButtonClicked')
    },
  }
}
</script>

<style scoped>

.pre-assessment {
  width:80%;
  position:absolute;
  top:20%;
  left:10%;
  right: 10%;
  text-align: center;
  background: #3d3d3d;
  color: white;
}
.lesson-menu {
  width:80%;
  position:absolute;
  top:30%;
  left:10%;
  right: 10%;
  text-align: left;
  color: white;
  font-size: 1em;
}
.column > p {
  background-color: #3d3d3d;
  margin: 10px 10px 10px 10px;
}

.blue-box {
  height: 100%;
  width: 7px;
  background-color: #1f5373;
}


li {
  margin: .5em 0;
}

p {
  font-size: 1em
}

</style>
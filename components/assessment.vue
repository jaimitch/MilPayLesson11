<template>
  <div id="app">
  <milpay-header />
  <div class="main-content">
    <multiple-choice />
    </div>
        <nav-bar v-on:prev="prev" v-on:next="next"/>
</div>
</template>

<script>
import {defineAsyncComponent}  from "vue";
import MultipleChoice from './assessments/MultipleChoice.vue';
import Header from '../components/header/Header'
import NavBar from './navbar/NavBar.vue';


export default {
    components: {
        'milpay-header': Header,
        'multiple-choice': MultipleChoice,
        'nav-bar': NavBar, 
    }, 
    data () {
        return {
            slide: 1,
            type: 'assessment'
        }
    },
    computed: {
        currentLessonId() {
            return this.$route.params.lessonid;
        }, 

    },
    props: {
        lessonid: { type: String, default: "no"} 
    },
    methods: {
        next() {
            this.slide++;
        },
        prev() {
            this.slide--;
        },
    },

}
</script>

<style scoped>
li {
  text-align: center;
  list-style-type: none;
  font-size: .5em
}

</style>
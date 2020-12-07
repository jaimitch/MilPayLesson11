<template>
  <div id="app">
  <milpay-header />
  <div class="main-content">
    <div class="lecture" >
        <component :is="this.comp" />
    </div>
    </div>
    <notes-bar />
</div>
    <nav-bar v-on:prev="prev" v-on:next="next"/>
</template>
 
<script>
import {defineAsyncComponent, ref}  from "vue";
import Header from '../components/header/Header'
import NotesBar from './notesbar/NotesBar.vue';
import NavBar from './navbar/NavBar.vue';


export default {
    components: {
        'milpay-header': Header,
        'notes-bar': NotesBar,
        'nav-bar': NavBar,
    }, 
    data () {
        return {
            slide: 1,
            type: 'lecture',
        }
    },
    computed: {
        comp () {
            this.slide;
            return defineAsyncComponent(() => import(`../pages/lesson${this.$route.params.lessonid}/slide${this.slide}`))
        },
        currentLessonId() {
            return this.$route.params.lessonid;
        },

    },
    props: {
        lessonid: String,
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

.lecture {
  width:100%;
  position:absolute;
  top:10%;
  height: 90%;
  text-align: left;
  background: #333333;
  color: white;
  font-size: 30px;
}

</style>
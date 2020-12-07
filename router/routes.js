import MainLayout from '../layouts/MainLayout';
import LessonLayout from '../layouts/LessonLayout';
import Home from '../pages/Home.vue'
import lecture from '../components/lecture.vue';
import assessment from '../components/assessment.vue';


let routes = [
    {
        path: '/',
        title: 'Home',
        icon: 'home',
        component: MainLayout,
        children: [
          { path: '/', name: 'home', title: 'Home', component: Home },
        ]
    },

        { 
          title: 'lesson lecture',
          path: '/lecture/:lessonid',
          name: 'lessonlecture',
          component: lecture,
          props: true,
        },
        { 
          title: 'lesson assessment',
          path: '/assessment/:lessonid',
          name: 'lessonassessment',
          component: assessment,
          props: true
        }
];

export default routes;
import { createStore } from 'vuex';
import data from './data';


const store = createStore({
    state() {
        return {
            // FIND A RECURSIVE WAY TO LOOP THIS:
            questions: data.questions,
            lessons: data.lessons,
            prequestions: data.prequestions,
            prequestionsWrong: data.prequestionsWrong,
            preassessmentCompleted: data.preassessmentCompleted,
            showLessons: data.showLessons,
            showPreassessment: data.showPreassessment,
            showPreassessmentButton: data.showPreassessmentButton,
            currentSlideTitle: data.currentSlideTitle,
            lessonNotes: data.lessonNotes
        };
    },
    mutations: {
        markLessonAsPassed (state, payload) {
            state.lessons[payload.lessonid-1].passedLesson = true
        },
        markLessonAsAttempted (state, payload) {
            state.lessons[payload.lessonid-1].attemptedLesson = true
        },
        preLessonPassed (state, payload) {
            state.lessons[payload.lessonid-1].passedLesson = true
        },
        markLectureParsed (state, payload) {
            state.lessons[payload.lessonid-1].parsedLecture = true
        },
        preassessmentButtonClicked (state) {
            state.showPreassessment = true;
            state.showPreassessmentButton = false;
        },
        preassessmentCompleted (state) {
            state.preassessmentCompleted = true;
            state.showLessons = true;
            state.showPreassessmentButton = false;
            state.showPreassessment = false;
        },
        setCurrentSlideTitle (state, title) {
            state.currentSlideTitle = title
        }
    },
    getters: {
        // FOR GETTING QUESTIONS AND ANSWERS
        getQuestionsByLesson: state => lessonid => {let questions = state.questions.filter(el => el.lesson == lessonid); return questions},
        getPreassessmentQuestions: state => state.prequestions,

        // FOR GETTING COURSE INFO SUCH AS LESSON TITLES
        getLessonTitle: state => lessonid => {let lesson = state.lessons.filter(el => el.lessonid == lessonid); return lesson[0].title},
        getLessons: state => state.lessons,

        //FOR GETTING PROGRESS INFO
        getLessonPassed: state => lessonid => {
            let passedBool = state.lessons.filter(el => el.lessonid == lessonid); 
            return passedBool[0].passedLesson
        },
        getLessonAttempted: state => lessonid => {
            let passedBool = state.lessons.filter(el => el.lessonid == lessonid); 
            return passedBool[0].attemptedLesson
        },
        getLessonLectureParsed: state => lessonid => {
            let passedBool = state.lessons.filter(el => el.lessonid == lessonid); 
            return passedBool[0].parsedLecture
        },
        getLessonLength: state => lessonid => {
            let passedBool = state.lessons.filter(el => el.lessonid == lessonid); 
            return passedBool[0].lectureLength
        },
        getPreassessmentCompleted: state => state.preassessmentCompleted,
        getShowLessons: state => state.showLessons,
        getShowPreassessment: state => state.showPreassessment,
        getShowPreassessmentButton: state => state.showPreassessmentButton,

        //FOR GETTING SLIDE NOTES
        getNotesContent: (state) => (lessonid, slide) => {
            let notesContent = state.lessonNotes.filter(el => el.lessonid == lessonid); 
            let notesContent2 = notesContent.filter(el => el.slide == slide); 
            return notesContent2
            
        },
    }
});

export default store;

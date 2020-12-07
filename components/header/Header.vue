<template>
<div class="header">
    <h1 id="page-title">{{pageTitle}}</h1>
    <h2 id="slide-title">{{$store.state.currentSlideTitle}}</h2>
    <div>
      <router-link :to="{ name: 'home' }">
        <img src="../../assets/white-home.svg" class="header-img-left">
      </router-link>
    </div>
    <div>
    <img src="../../assets/MilPay-AG-Crest.png" class="header-img-right">
    </div>
</div>
  
</template>

<script>
export default {
    methods: {
      swapTitle(newTitle) {
        this.slideTitle = newTitle
      }
    },
    data() {
      return {
        pageTitle: 'M I L P A Y',
        slideTitle: undefined,
        isHomePage: true
      }
    },
    watch: {
      $route: {
        immediate: true,
        handler($route) {
          if ($route.params.lessonid) {
            console.log($route.params.lessonid)
              this.pageTitle = this.$store.getters.getLessonTitle($route.params.lessonid);
              this.isHomePage = false
          } else {
            this.isHomePage = true;
            this.$store.commit('setCurrentSlideTitle','')

          }
          }}
    },

}
</script>

<style scoped>

.header {
    text-transform: uppercase;
}

#page-title {
  letter-spacing: 5px;
  position: absolute;
  font-size:1.2em;
  top: 15%;
  left:17%;
}
#slide-title {
  font-weight: normal;
  letter-spacing: 3px;
  position: absolute;
  font-size:.9em;
  top: 40%;
  left:17%;
}

</style>
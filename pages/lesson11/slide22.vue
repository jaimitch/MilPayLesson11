<template>
  <div>
      <h2>Legacy Retirement System</h2>
      <h2>Years x High 3 x .025</h2>

      <img src="../../assets/lesson11/Legacy_Retirement_System.png" style="width: 900px" alt="">

      <h2>Blended Retirement System</h2>
      <h2>Years x High 3 x .02</h2>

      <img src="../../assets/lesson11/Blended_Retirement_System.png" style="width: 900px" alt="">
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Retirement Comparison'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>
    <img src="../../assets/lesson11/TSP_Contribution_Limits.png" style="width:900px">
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'TPS Guidlines cont.'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
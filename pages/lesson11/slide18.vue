<template>
  <div>
    <img src="../../assets/lesson11/Service_Contributions.png" style="width:900px" alt="">
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'BRS'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
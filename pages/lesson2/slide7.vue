<template>
  <div>
    
<img src="../../assets/lesson2/DoDFMR_Number_System.png" style="width:900px">
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'DoDFMR Number System'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
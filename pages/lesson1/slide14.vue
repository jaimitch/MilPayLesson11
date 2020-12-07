<template>
  <div>
    <img src="../../assets/lesson1/Unit_Commanders_Financial_Report.png" style="width:900px">
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 6 - Unit Commander’s Finance Report '
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
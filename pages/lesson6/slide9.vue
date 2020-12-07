<template>
  <div>
    <p>Unit Commander’s Finance Report</p>
    <img>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 6: UCFR'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
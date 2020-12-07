<template>
  <div>
      <h1>Allowances</h1>
      <h2>PRACTICAL EXERCISE</h2>
      <h2>START TIME:</h2>
      <h2>END TIME:</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: ''
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>
    <p>PRACTICAL EXERCISE</p>
    <p>START TIME:</p>
    <p>END TIME:</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Research Finance Regulations'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
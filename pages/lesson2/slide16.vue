<template>
  <div>
    <img>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'JTR Number System'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
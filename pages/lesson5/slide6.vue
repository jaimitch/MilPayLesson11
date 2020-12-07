<template>
  <div>

img here
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 3 - KSD DA Form 1506'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
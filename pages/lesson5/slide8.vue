<template>
  <div>
img here

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 6 - UCFR'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
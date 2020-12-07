<template>
  <div>


  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Determine Basic Pay'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
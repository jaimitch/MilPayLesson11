<template>
  <div>


  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Reserve Pay Overview'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
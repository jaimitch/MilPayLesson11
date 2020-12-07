<template>
  <div>
    

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
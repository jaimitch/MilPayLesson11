<template>
  <div>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Federal Taxes'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
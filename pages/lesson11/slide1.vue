<template>
  <div>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Military Savings Programs'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
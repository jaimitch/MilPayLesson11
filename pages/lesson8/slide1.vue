<template>
  <div>


  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Allotments'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
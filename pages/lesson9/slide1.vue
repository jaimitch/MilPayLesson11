<template>
  <div>


  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Special & Incentive Pay'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
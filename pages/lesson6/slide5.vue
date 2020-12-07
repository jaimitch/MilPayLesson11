<template>
  <div>
    <p>DA Form 5960</p>
    <img>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 3: KSD Basic Allowance for Housing'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
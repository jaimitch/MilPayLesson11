<template>
  <div>
<p>img here</p>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 2 - Research'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
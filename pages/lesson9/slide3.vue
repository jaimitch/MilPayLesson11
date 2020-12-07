<template>
  <div>
IMG HERE

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 1 - Pay Inquiry'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>

IMG HERE
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 3 - KSD'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>
img here

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 3 - KSD: Enlistment Contract'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
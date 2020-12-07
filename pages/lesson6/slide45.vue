<template>
  <div>
    <p>Questions, Comments or Concerns?</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: ''
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
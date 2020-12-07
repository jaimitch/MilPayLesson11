<template>
  <div>
    <p><b>Questions, Comments or Concerns?</b></p>
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
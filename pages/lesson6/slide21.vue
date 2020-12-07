<template>
  <div>
        <img>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Non-Locality Chart'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
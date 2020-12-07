<template>
  <div>
    <p>insert image here</p>
    <img>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 3: KSD Marriage Certificate'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
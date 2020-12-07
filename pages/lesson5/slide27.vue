<template>
  <div>


  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Questions - Comments - Concerns'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
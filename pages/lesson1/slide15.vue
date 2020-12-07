<template>
  <div>
<img src="../../assets/lesson1/Question_Page.png" style="width:400px">
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
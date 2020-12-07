<template>
  <div>
<img src="../../assets/lesson3/Geographic_Areas_Responsibility.png" style="width:700px">
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
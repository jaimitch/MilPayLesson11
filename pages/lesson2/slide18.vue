<template>
  <div>
    <p>Questions, Comments or Concerns?</p>
<img src="../../assets/lesson2/Question_Page.png" style="width:600px">
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Check on Learning'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
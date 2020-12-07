<template>
  <div>
    <img src="../../assets/lesson2/JTR_Number_System.png" style="width:900px">

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'JTR Chapters'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
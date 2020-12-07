<template>
  <div>
    <img src="../../assets/lesson1/Drot_Example.png" style="width:700px">

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 5 - Daily Register Of Transactions (DROT)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>
    <h2>Unit Transmittal Letter (UTL)</h2>
    <p>Sample Attached Listing to DA Form 200</p>
    <img src="../../assets/lesson1/Unit_Transmittal_Letter.png" style="width:900px">
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 4 - Unit Transmittal Letter (UTL)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
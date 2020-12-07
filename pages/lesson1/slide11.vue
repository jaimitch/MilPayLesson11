<template>
  <div>
    <img src="../../assets/lesson1/Army_Audit_Readiness.png" style="width:900px">
    <h2>Needed for audit purposes and Internal Control</h2>
    <a href="https://www.hrc.army.mil/content/Army%20Soldier%20Records%20Branch%20-%20ASRB"><p>https://www.hrc.army.mil/content/Army%20Soldier%20Records%20Branch%20-%20ASRB</p></a>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 3 - KSD'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>
<h2> Unit Transmittal Letter (UTL)</h2><h2>
  Sample Attached Listing to DA Form 200</h2>
IMG HERE
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: ' Step 4 - UTL'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
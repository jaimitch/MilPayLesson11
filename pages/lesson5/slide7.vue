<template>
  <div>
<h1>Unit Transmittal Letter (UTL)</h1>
<h1>Sample Attached Listing to DA Form 200</h1>
img here
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 4 - UTL'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
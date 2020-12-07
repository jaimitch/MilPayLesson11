<template>
  <div>
    <form>
      <textarea rows="1" cols="25" name="usrtxt" wrap="hard">Unit Transmittal Letter (UTL)</textarea>
      <textarea rows="1" cols="40" name="usrtxt" wrap="hard">Sample Attached Listing to DA Form 200</textarea>
    </form>
    <img>
    <p>Report of documents accepted by the finance office</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 4: UTL'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
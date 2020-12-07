<template>
  <div>
    <form>
      <textarea rows="1" cols="20" name="usrtxt" wrap="hard">DROT EXAMPLE</textarea>
    </form>
    <img>
    <p>Report of transactions processed for Soldiers in your unit</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 5: DROT'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
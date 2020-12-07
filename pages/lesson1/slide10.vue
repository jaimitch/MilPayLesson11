<template>
  <div>
    <ul>
      <li>Conduct research 
      <ul>
      <li>Stay current with changes</li>
      <li>Reduce rejects </li>
      </ul> </li>
      <li>Use system capabilities</li>

      <li>Track Unit Transmittal Letters (UTL)</li>

      <li>Review Daily Register of Transactions (DROT)</li>

      <li>Read remarks section on Leave and Earnings Statement (LES)</li>




    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 2 - Research'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>

      <h2>Thrift Savings Plan (TSP)</h2>
      <h2>https://www.tsp.gov/index.html</h2>

      <h2>Blended Retirement System (BRS)</h2>
      <h2>https://militarypay.defense.gov/blendedretirement/</h2>

      <h2>DoDFMR Vol 7A: Military Pay Policy</h2>
      <h2>https://comptroller.defense.gov/FMR/fmrvolumes.aspx</h2>

      <h2>DoDFMR Vol 7B: Military Pay Policy – Retired Pay</h2>
      <h2>https://comptroller.defense.gov/FMR/fmrvolumes.aspx</h2>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Useful links'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
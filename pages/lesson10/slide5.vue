<template>
  <div>
      <h2>Social Security</h2>
        <section>
            <ul>
                <li>CY 2020 6.2%</li>
                <li>Base limit $137,000</li>
            </ul>
        </section>
      <h2>Medicare</h2>
        <section>
            <ul>
                <li>CY 2020 1.45%</li>
                <li>No cap on deductions</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Federal Insurance Contributions Act (FICA) Taxes'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
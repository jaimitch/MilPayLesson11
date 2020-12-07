<template>
  <div>
      <h2>DoDFMR Vol 7A 2602 Table 26-1</h2>
        <section>
            <ul>
                <li>Housing allowance rates are divided into categories</li>
                    <ul>
                        <li>Basic Allowance for Housing (BAH)</li>
                        <li>Basic Allowance for Housing Differential (BAH-Diff)</li>
                        <li>Basic Allowance for Housing Partial (BAH-Partial)</li>
                        <li>Basic Allowance for Housing Transit (BAH-Transit/RC)</li>
                        <li>Overseas Housing Allowance (OHA)</li>
                        <li>Family Separation Housing (FSH)</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Housing Allowances'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
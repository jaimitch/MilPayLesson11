<template>
  <div>
      <h2>Types of Withholdings</h2>
        <section>
            <ul>
                <li>Federal Income Tax Withholding (FITW)</li>
                <li>State Income Tax Withholding (SITW)</li>
            </ul>
        </section>
        <h2>Factors for Income Tax Withholdings</h2>
        <section>
            <ul>
                <li>Income</li>
                <li>Marital status</li>
                <li>Exemptions</li>
                <li>Additional amount withheld</li>
            </ul>
        </section>
        <h2>FITW calculation methods</h2>
        <section>
            <ul>
                <li>Wage bracket</li>
                <li>Percentage (manual computation)</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Withholdings'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
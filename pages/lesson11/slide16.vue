<template>
  <div>
      <h2>DoDFMR Vol 7A 510405</h2>
      <p>Agency Automatic (1 Percent) Contribution</p>
      <section>
          <ul>
              <li>Begins on or after the member’s 60th day of service from the PEBD</li>
              <li>Fully vested after 24 months of service; forfeited prior to this date</li>
              <li>Continues through member attaining 26 years of service</li>
          </ul>
      </section>
      <p>Agency Matching Contribution (up to 4 percent)</p>
      <section>
          <ul>
              <li>Eligible after 2 years of service</li>
              <li>Continues through member attaining 26 years of service</li>
          </ul>
      </section>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Auto-Enrolled BRS Member cont.'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
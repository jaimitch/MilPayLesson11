<template>
  <div>
      <h2>DoDFMR Vol 7A 2602</h2>
        <section>
            <ul>
                <li>Housing allowance rates are divided into categories</li>
                    <ul>
                        <li>Based on rank, dependency status, and location</li>
                        <li>When adequate housing is not furnished (off post housing)</li>
                        <li>BAH rates based on median housing costs and is paid independently of a member’s actual housing costs</li>
                        <li>Old PDS rate from departure to arrival at new PDS</li>
                        <li>Paid for housing in CONUS locations</li>
                    </ul>
                <li>Not Payable</li>
                    <ul>
                        <li>Adequate quarters furnished for member and dependents</li>
                    </ul>
            </ul>
            <p>BAH Reference location:<a href="https://www.defensetravel.dod.mil/site/bah.cfm ">https://www.defensetravel.dod.mil/site/bah.cfm </a></p>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Basic Allowance for Housing (BAH)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
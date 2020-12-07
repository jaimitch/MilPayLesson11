<template>
  <div>
      <h2>DoDFMR Vol 7A 2606</h2>
        <section>
            <ul>
                <li>OHA is authorized to assist a member and/or dependents in paying the housing costs for:</li>
                    <ul>
                        <li>OCONUS PDS</li>
                        <li>Geographic location governs the OHA rate</li>
                        <li>Ceiling rate based on actual rental costs</li>
                        <li>Cost reimbursement based on allowance</li>
                    </ul>
                <li>OHA Report (DD Form 2367)</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Overseas Housing Allowance (OHA)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
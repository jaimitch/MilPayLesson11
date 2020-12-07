<template>
  <div>
      <h2>DoDFMR Vol 7A 2503</h2>
        <section>
            <ul>
                <li>Only for Soldiers stationed OCONUS</li>
                <li>Supplement to BAS</li>
                <li>Household income does not exceed 30% above the Federal poverty line</li>
                <li>Paid monthly, proration not to exceed $1,100</li>
                <li>Termination/recertification within 30 days:</li>
                    <ul>
                        <li>Annually in February</li>
                        <li>$100 raise in household income</li>
                        <li>Decrease in household size</li>
                        <li>Upon PCS</li>
                        <li>Promotion</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Family Subsistence Supplemental Allowance'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
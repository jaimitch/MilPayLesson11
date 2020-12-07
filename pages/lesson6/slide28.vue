<template>
  <div>
      <h2>DoDFMR Vol 7A Chapter 68</h2>
      <p>Payable to member with dependents for added housing expenses resulting from separation of dependents; when a member is assigned to an OCONUS PDS or incident to an assignment in the CONUS and dependent travel is delayed or restricted</p>
        <section>
            <ul>
                <li>Based on geographical duty location</li>
                <li>Paid on a daily rate</li>
                    <ul>
                        <li>1st to the 15th</li>
                        <li>16th to the end-of-month</li>
                        <li>With or w/o dep</li>
                    </ul>
                <li>Non-taxable</li>
                <li>Data Collection</li>
                    <ul>
                        <li>On non-housing expenditures</li>
                        <li>Measures the costs of local markets in each area, local sales taxes, and their impact on average costs, which are part of the survey</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'OCONUS COLA'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
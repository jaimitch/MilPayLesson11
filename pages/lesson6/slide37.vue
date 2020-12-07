<template>
  <div>
      <h2>DoDFMR Vol 7A 2701</h2>
        <section>
            <ul>
                <li>Compensation for added expenses of enforced separation</li>
                <li>Payable to members with dependents</li>
                <li>Payable to member married to member</li>
                <li>Not more than one FSA for the same period</li>
                <li>Does not accrue if within reasonable commute</li>
                    <ul>
                        <li>50 miles</li>
                        <li>1.5 hours</li>
                    </ul>
                <li>Documentation</li>
                    <ul>
                        <li>DD Form 1561 (Statement to Substantiate FSA)</li>
                        <li>Orders</li>
                        <li>Settled travel voucher (Advice of Payment)</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Family Separation Allowance (FSA)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
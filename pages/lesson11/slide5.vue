<template>
  <div>
      <h2>DoDFMR Vol 7A 510206</h2>
      <p>Interest</p>
        <section>
            <ul>
                <li>10 percent per annum / 2.5 percent quarterly</li>
                <li>No interest on amounts over $10,000                         
                    (Does not apply to members in a missing status)</li>
                <li>Deposit by 10th of the month; amount receives interest for that month</li>
                <li>Interest is accrued up to 90 days after redeployment</li>
                <li>Taxable (interest only)</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'SDP cont.'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
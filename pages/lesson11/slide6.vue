<template>
  <div>
      <h2>DoDFMR Vol 7A 5102</h2>
      <p>Withdrawals</p>
        <section>
            <ul>
                <li>Normally 90 days after redeployment</li>
                <li>Automatically transferred after 120 days to pay account</li>
                <li>Submit withdrawal request through MyPay, email, fax, or mail</li>
            </ul>
        </section>
    <p>Special Circumstances</p>
    <section>
        <ul>
            <li>In a missing status</li>
            <li>Emergencies</li>
            <li>Amounts over $10,000</li>
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
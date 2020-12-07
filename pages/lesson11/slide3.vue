<template>
  <div>
      <h2>DoDFMR Vol 7A 510201</h2>
      <p>Eligibility</p>
        <section>
            <ul>
                <li>Federal Income Tax Withholding (FITW)</li>
                <li>Must serve at least 30 days or 1 day for each 3 consecutive months</li>
                    <ul>
                        <li>In a Combat Zone (CZ)</li>
                        <li>Qualified Hazardous Duty Area (QHDA)</li>
                        <li>Designated direct support area of a CZ</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Savings Deposit Program (SDP)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
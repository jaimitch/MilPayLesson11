<template>
  <div>
      <h2>DoDFMR Vol 7A 2904</h2>
        <section>
            <ul>
                <li>Payable the month following the anniversary</li>
                <li>Accrues after 6 months of service</li>
                <li>First payment is after 1 year of uninterrupted active military service</li>
                    <ul>
                        <li>Basic Cash Clothing Replacement Allowance</li>
                            <ul>
                                <li>Payable during the first 3 years</li>
                                <li>Based on gender</li>
                            </ul>
                        <li>Standard Cash Clothing Replacement Allowance</li>
                            <ul>
                                <li>Payable after the first 3 years</li>
                                <li>Based on gender</li>
                            </ul>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Cash Clothing Replacement Allowance'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
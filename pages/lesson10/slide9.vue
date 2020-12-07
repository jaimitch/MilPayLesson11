<template>
  <div>
      <p>LTC Banner has 18 years of service. In January 2019 he was in Afghanistan receiving IDP and HDP-L. What amount of the pay was taxable?</p>
      <p><b>Step 1 Find Taxable Pay</b></p>
      <p>$8,998.50 (BP) + $225 (IDP) + $100 (HDP-L) = $9,323.50</p>
      <p><b>Step 2 Add IDP / HFP to SMA Basic Pay</b></p>
      <p>$225 + $8,578.50 = $8,803.50</p>
      <p><b>Step 3 Subtract Step 2 from Step 1</b></p>
      <p>$9,323.50 - $8,803.50 = $520.00</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Calculating CZTE Cont.'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
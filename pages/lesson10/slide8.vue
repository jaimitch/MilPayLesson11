<template>
  <div>
      <p>COL Wayne with 16 years of service was in Afghanistan February 2019 receiving IDP and HDP-L. What amount of the pay was taxable?</p>
      <p><b>Step 1 Find Taxable Pay</b></p>
      <p>$9,586.80 (BP) + $225 (IDP) + $100 (HDP-L) = $9,911.80</p>
      <p><b>Step 2 Add IDP / HFP to SMA Basic Pay</b></p>
      <p>$225 + $8,578.50 = $8,803.50</p>
      <p><b>Step 3 Subtract Step 2 from Step 1</b></p>
      <p>$9,911.80 - $8,803.50 = $1,108.30</p>
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
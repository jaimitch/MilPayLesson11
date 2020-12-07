<template>
  <div>
<ul>
<li>Travel Per Diem & Monetary Allowance in Lieu of Transportation (MALT)</li>

<li>Dislocation Allowance (DLA)</li>

<li>Temporary Lodging Expense (TLE)</li>

<li>Temporary Lodging Allowance (TLA)</li>

<li>Advance Pay</li>

</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'PCS Allowances'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>

<ul>
<li>Collection</li>
<ul>
<li>Starts the month following payment </li>

<li>Prorated 12 months (or less)</li>

<li>24 months with justification and/or memorandum from commander</li>

<li>Lump sum repayment</li>

<li>Increase monthly payments</li>

<li>Repaid before separation</li></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Recoupment of Advance Payments'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
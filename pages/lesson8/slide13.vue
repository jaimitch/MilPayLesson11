<template>
  <div>
<h2>DoDFMR Vol 7A Chapter 43</h2>
<ul>
<li>No limit on number for a specific purpose</li>
<ul>
<li>Loan repayment (Red Cross and service relief agencies)</li>
<li>Charitable contributions</li>
<li>Commercial debt</li>
<li>Delinquent GTCC</li>
<li>Privatized housing payments</li>
<li>Electronic Savings Bonds (Treasury Direct)</li>
</ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Non-Discretionary Allotments'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>
    <div class="row">
      <div class="column">

<ol>
<li>Military Pay Course Overview</li>
<li>Research Finance Regulations</li>
<li>Reserve Pay</li>
<li>Unit Commander's Finance Report (UCFR)</li>
<li>Determine Basic Pay</li>
<li>Allowances</li>
<li>Permanent Change of Station (PCS) Entitlements</li>
<li>Allotments</li>
<li>Special Pay & Incentive Pay</li>
<li>Federal Taxes</li>
<li>Military Savings Programs</li>
<li>Military Pay Collections</li>
<li>Other Deductions</li>
<li>Military Pay Metrics</li>
<li>Audit Fundamentals</li>
<li>IPPS-A Overview</li>
</ol>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Course Schedule'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
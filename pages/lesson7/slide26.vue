<template>
  <div>


<p>DoDFMR Vol 7A Chapter 320201</p>
<ul>
<li> payable (Base Pay minus Deductions)</li>

<li>Less deduction</li>
<ul>
<li>Forfeiture</li>
<li>Montgomery G.I. Bill</li>
<li>Tricare Dental</li>
<li>Federal/state income tax withholding (FITW/SITW)</li>
<li>Federal Insurance Contribution Act (FICA)</li>
<li>Service members Group Life Insurance</li>
<li>Armed Forces Retirement Home (AFRH)</li>
<li>Monthly repayment of a prior advance</li>
<li>Garnishment</li>
<li>Any other mandatory monthly deductions</li></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Advance Payments'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
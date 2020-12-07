<template>
  <div>
    <ul>
<li>Additional conditions</li>
<ul><li>Requires annual certification</li>
<li>Proficiency in at least 2 of the 3 language skills:  reading, listening, and speaking</li></ul>

<li>Rates </li>
<ul><li>Not to exceed $12,000 per year</li>
<li>Not to exceed $500 per month for one language</li>
<li>Not to exceed $1,000 per month for multiple languages</li></ul>

<li>Orders/contract must include</li>
<ul><li>Amount awarded</li>
<li>Period of award</li>
<li>Certification or recertification requirements</li>
<li>Repayment provisions</li></ul>
</ul>
<p>Rates can be found at: <a href="https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/FLPB.html"></a>https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/FLPB.html</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'FLPB cont.'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
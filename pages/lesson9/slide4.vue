<template>
  <div>
 <h2>DoDFMR Vol 7A 170201</h2>
<ul>
<li>Recognized service at a designated location where living conditions are substantially below those normally found in the U.S. </li>

<li>Duty must exceed 30 days in designated locations </li>

<li>Payable to officers and enlisted</li>

<li>Locations and rates (Figure 17-1)</li>
<ul>
<li>Rates $50 - $150 monthly </li>
<li>Not to exceed $150 per month</li>
<li>Prorated daily</li></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 2 - Research Entitlement'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
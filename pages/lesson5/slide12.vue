<template>
  <div>

 Pay Rate (Pay Grade + Years of Service)

 Computation of Basic Pay (BP)
<ul>
<li>BP/30 = daily rate</li>

<li>Daily rate x number of days + inclusive day = monthly prorated amount</li>
</ul>

<p>img here</p>
<a href="www.dfas.mil/militarymembers/payentitlements/Pay-Tables/PayTableArchives.html">www.dfas.mil/militarymembers/payentitlements/Pay-Tables/PayTableArchives.html</a>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Monthly Prorated Amount for Basic Pay'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
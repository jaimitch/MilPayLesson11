<template>
  <div>
<p>SFC Clark with 10 years of service entered active duty 20 April 2019. How much basic pay will the service member be authorized in April?</p>
img here
<p>
Step 1 Determine basic pay = $4071.60
<br>Step 2 Determine daily rate = $4071.60 / 30 = $135.72 daily rate
<br>Step 3 Determining days = 30 - 20 (April) =	10 days	
<br>Step 4 Add inclusive days = 10 + 1 (inclusive day) = 11 days
<br>Step 5 Calculate monthly prorated amount = 11 x $135.72 = $1492.92
</p>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Monthly Prorated Amount Example 2'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
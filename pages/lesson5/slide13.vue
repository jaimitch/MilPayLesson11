<template>
  <div>
<p>SSG Bruce with 8 years of service entered active duty on 14 June 2019. How much basic pay will the service member be authorized in June?</p>
img here
<p>Step 1 Determine basic pay = $3543.30
<br>Step 2 Determine daily rate =  $3543.30 /  30   =   $118.11            daily rate
<br>Step 3 Determining days     = 30 -   14  (June) =     16 days
<br>Step 4 Add inclusive days   =      + 1 (inclusive day) =     17 days
<br>Step 5 Calculate monthly prorated amount = 17 x $118.11 =  $2007.87</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Monthly Prorated Amount Example 1'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
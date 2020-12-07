<template>
  <div>

<p>
JTR 0506</p>
<p>
Purpose</p>
<ul>
<li>To partially pay members for lodging/meal expenses incurred by a member/dependent(s) while occupying temporary lodging</li></ul>
<p>
Provisions</p>
<ul>
<li>10 days CONUS to CONUS or OCONUS to CONUS</li>

<li>5 days CONUS to OCONUS</li>

<li>Maximum TLE increase period is 60 days i.e. major disaster (order of Sec Army)</li></ul>


  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Temporary Lodging Expense (TLE)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>
 <h2>DoDFMR Vol 7A 170201</h2>
<ul>
<li>Recognized service at designated location where living conditions are substantially below those normally found in the U.S. </li>

<li>Duty must exceed 30 days in designated locations</li> 

<li>Locations and rates (Figure 17-1)</li>

<li>Rates $50 - $150 monthly not to exceed $150 per month</li>
<ul>
<li><b>Prorated daily</b></li></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'HDP-L'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
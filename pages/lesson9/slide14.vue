<template>
  <div>
<h2>DoDFMR Vol 7A Chapter 10</h2>
<ul>
<li>Entitlement Provisions</li>
<ul>
<li>Subjected to hostile fire or explosion of a hostile mine </li>
<li>Rate of $225 per month</li>
<li>Payment will be made for the full month</li>
<li><b>Not Prorated</b></li>
</ul>
<li>Certified by the Commander </li>

<li>Death certificate or injury report</li>
<ul>
<li>Establishes the cause of death or injury due to either:</li>
<ul><li>Hostile fire</li>
<li>Explosion of a hostile mine</li></ul></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Hostile Fire Pay (HFP)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
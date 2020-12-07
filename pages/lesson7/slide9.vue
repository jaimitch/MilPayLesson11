<template>
  <div>
    <ul>
<li>Purpose</li>
<ul>
<li>Used for house hunting when relocating to a new duty assignment</li></ul>

<li>Rules</li>
<ul>
<li>Commanders, O-5/ LTC or higher, are authorized to approve for no more than 10 days</li>

<li>DA Form 31 is normally annotated prior to the Soldier’s PCS departure for house hunting</li>

<li>Soldier no longer required to report to the gaining on-post housing office prior to starting house hunting per military pay E-message</li></ul>
</ul>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'House Hunting'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>
<ul>
<li>Jumps performed do not qualify when</li>
<ul>
<li>On leave</li>
<li>On TDY not requiring parachute jumping</li>
<li>On PCS not requiring parachute jumping </li>
</ul>
<li>Parachute Duty and AvIP both payable</li>

<li>Documentation</li>
<ul>
<li>Assignment or termination orders</li>
<li>Orders/Manifest</li>
<li>DA Form 4730, certificate of performance of Hazardous Duty</li></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Parachute Duty Incentive Pay cont.'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>
 <h2>DoDFMR Vol 7A Chapter 22</h2>

<li>HDIP for Flying Duty</li>
<ul>
<li>Aircrew member $250 monthly rate</li>
<li>Non-crewmember $150 monthly rate</li>
</ul>
<li>Aviation Incentive Pay (AvIP)</li>
<ul>
<li>May not receive more than two types of HDIP. Members entitled to HDIP for flying duty (in lieu of AvIP or CSIP), may not receive more than two other HDIPs.</li>
</ul>
<li>Documentation (competent orders) </li>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'HDIP cont.'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
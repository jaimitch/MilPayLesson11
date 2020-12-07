<template>
  <div>
<h2>DoDFMR Vol 7A 2403</h2>
<ul>
<li>Static line parachute duty is $150 per month</li>

<li>Military Free Fall is $225 per month; must perform duty involving parachute jumping, as an essential part of their military duties, in military free fall operations where parachute deployment by the jumper occurs without the use of a static line </li>

<li>Designation as a parachutist or parachute rigger, or undergoing training</li>

<li>Required by orders to engage in parachute jumping</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Parachute Duty Incentive Pay'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
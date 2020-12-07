<template>
  <div>

<h2>USAR PAM 37-1 Chapter 6 Para 6-2</h2>

<h2>Earned for continuous AD periods of 30 days or more</h2>
<ul>
<li>60 day career limit on accrued leave payments</li>
<li>60 day career does not apply to leave earned on AGR, AT, ADT, ADOS and CONOPs of 31 to 365 Days</li>
</ul>
<h2>Carryover leave to new status</h2>
<ul>
<li>AC/AGR to TPU or TPU to AC/AGR</li>
<li>All or a portion can be used on a new AD period of 30 days or more </li>
</ul>
<h2>Request Payment</h2>
<ul>
<li>Soldiers can request payment of leave balance for honorable discharges, transfers to IRR, and/or retirements</li> 
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Accrued Leave'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
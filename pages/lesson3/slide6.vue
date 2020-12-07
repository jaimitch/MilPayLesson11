<template>
  <div><div class="row">
    <div class="column">
<h2>Active Guard Reserve (AGR)</h2>
<ul>
<li>USAR managed by HRC, Title 10 Orders (Federal)</li>
<li>ARNG managed by State, Title 32 Orders (State)</li>
</ul>
<h2>Troop Program Unit Soldier (TPU)</h2>
<ul>
<li>Attends Battle Assembly (BA) in an IDT status 2 days/month</li>
<li>Attends Annual Training (AT) 2 weeks/year </li>
</ul></div>
    <div class="column">

<h2>Individual Ready Reserve (IRR)</h2>
<ul>
<li>Non-drilling/IDT Soldier that can be activated as needed</li>
<li>Mobilize during wartime or national emergencies</li>
</ul>
<h2>Individual Mobilization Augmentee (IMA)</h2>
<ul>
<li>Supports AD or USAR CONOPs through Agencies/IMA Units</li>
<li>Performs IDT and AT to meet war manpower requirements</li>
<li>Train during peacetime in order to be utilized during wartime</li>
</ul></div></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Duty Types'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
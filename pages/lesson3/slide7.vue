<template>
  <div class="row">
    <div class="column">
      <h2>Inactive Duty Training (IDT)</h2>
      <ul>
      <li>TPU/IRR/IMA performs IDT to enhance MOS/AOC skills</li>
      </ul>
      <h2>Active Duty Training (ADT)</h2>
      <ul>
      <li>Attend local unit training workshop </li>
      </ul>
      <h2>Active Duty for Training Schools (ADTS)</h2>
      <ul>
      <li>Attend PME, MOS reclassification </li>
      </ul></div>
     <div class="column"> <h2>Active Duty for Operational Support (ADOS)</h2>
      <ul>
      <li>Provide daily support to unit operations</li>
      </ul>
      <h2>Mobilization for Contingency Operations (MOB CONOPs)</h2>
      <ul>
      <li>TPU Deploys (CONUS or OCONUS)</li>
      </ul> </div> 
</div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Orders and Training Types '
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
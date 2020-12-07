<template>
  <div>
<div class="row">
  <div class="column">
      <h2>DA Form 1380</h2>
      <ul><li>Record of Individual Performance of Reserve Duty Training</li>
      <li>(Rescheduled Drill Payments)</li>
</ul>
      <h2>USAR Form 22-R </h2>
      <ul><li>Adjustment Certification Worksheet 
      (Pay grade correction)</li>
</ul>
      <h2>USAR Form 24-R</h2>
      <ul><li>Claim for Active Duty Pay, Allowances, and Adjustments (Request payment of leave)</li>
        </ul>
  </div>
  <div class="column">

      <h2>USAR Form 25-R</h2>
      <ul><li>Active Duty Certificate of Performance 
      (ADOS/PME/MOS reclassification 30+)</li>
</ul>
      <h2>USAR Form 26-R</h2>
      <ul><li>Pay Transmittal Letter</li>
</ul>
      <h2>USAR From 27-R</h2>
      <ul><li>Pay Inquiry </li>

      </ul>
  </div>
</div>
      <p>Forms can be downloaded <a href="https://www.usar.army.mil/Publications/">here</a></p>
      <p>USAR pay E-messages can be downloaded at <a href="https://xtranet/usarc/g8/pay/Pay%20Messages/Forms/AllItems">https://xtranet/usarc/g8/pay/Pay%20Messages/Forms/AllItems</a></p>

  
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'USAR Pay Forms'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
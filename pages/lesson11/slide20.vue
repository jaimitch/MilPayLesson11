<template>
  <div>
      <section>
          <ul>
              <li>Must serve 20 years</li>
              <li>Pay begins upon retirement from service</li>
              <li>Average of high-36 months of basic pay</li>
              <li>Retirement multiplier 2.5% or 2%</li>
              <li>Lifetime monthly annuity</li>
          </ul>
      </section>

      <img src="../../assets/lesson11/Retirment_Active_Component.png" style="width: 900px" alt="">
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Retirement - Active Component'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
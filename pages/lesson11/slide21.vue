<template>
  <div>
      <section>
          <ul>
              <li>Must serve 20 qualifying years of service; 50 or more points</li>
              <li>Retirement pay begins at age 60</li>
              <li>Average of high-36 months of basic pay</li>
              <li>Retirement multiplier 2.5% or 2%</li>
              <li>Lifetime monthly annuity</li>
          </ul>
      </section>

      <img src="../../assets/lesson11/Retirement_Reserve_NG.png" style="width: 900px" alt="">
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Retirement - Reserve/National Guard'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
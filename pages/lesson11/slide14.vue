<template>
  <div>
      <h2>DoDFMR Vol 7A 510404</h2>
      <p>Initial Contributions</p>
      <section>
          <ul>
              <li>Begins the pay period following member’s 60th day of service as calculated from Pay Entry Base Date (PEBD)</li>
              <li>Default Contribution 3 percent basic/inactive duty pay</li>
              <li>Contribution changes can be made before or after initial deduction</li>
          </ul>
      </section>
      <p>Note:  Projected default contribution for FY21 will be 5 percent basic/inactive duty pay.</p>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Auto-Enrolled BRS Member'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
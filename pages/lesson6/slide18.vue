<template>
  <div>
      <h2>DoDFMR Vol 7A 260503</h2>
        <section>
            <ul>
                <li>Without dependent assigned to single-type quarters not authorized to receive any other type of BAH or OHA</li>
                <li>Factors for determining eligibility</li>
                    <ul>
                        <li>Residing in single type Gov’t QTRS</li>
                        <li>Hospitalization</li>
                        <li>Grade of Soldier</li>
                        <li>PPCS status</li>
                        <li>Marital status</li>
                        <li>Dependent status</li>
                        <li>Judicial confinement status</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'BAH-Partial'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
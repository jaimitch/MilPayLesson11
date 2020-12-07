<template>
  <div>
      <h2>DoDFMR Vol 7A 510406</h2>
      <p>Opt-In Members</p>
      <section>
          <ul>
              <li>Agency Automatic and Matching Contribution</li>
                <ul>
                    <li>Begins on or after date member opts into BRS</li>
                    <li>Continues through member attaining 26 years of service</li>
                </ul>
          </ul>
      </section>
      <p>TSP for Members not under BRS</p>
      <section>
          <ul>
              <li>Not eligible for agency automatic and matching contributions</li>
              <li>Remain under the legacy retirement system</li>
          </ul>
      </section>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Opt-In Members / Members not under BRS'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
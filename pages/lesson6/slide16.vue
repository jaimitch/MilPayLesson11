<template>
  <div>
      <h2>DoDFMR  Vol 7A 2604</h2>
        <section>
            <ul>
                <li>No dependents; both Soldiers receive w/o BAH</li>
                <li>Dependents under one household</li>
                  <ul>
                    <li>Senior member authorized w/dep rate</li>
                    <li>WJunior w/o dep rate</li>
                  </ul>
                <li>Assigned different locations; BAH determined separatelye</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Member Married to Member'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
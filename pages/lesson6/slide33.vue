<template>
  <div>
        <section>
            <ol>
                <li>A Soldier must prepare an Individual Overseas Housing Allowance Report (DD Form _____ ) at the Housing Office to start OHA entitlement.</li>
                <li>A Soldier can receive BAH-Diff if the amount of support is less than BAH Diff rate.  True or False</li>
            </ol>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Check on Learning'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
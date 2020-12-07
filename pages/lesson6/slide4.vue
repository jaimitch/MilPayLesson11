<template>
  <div>
      <h2>Basic Allowance for Housing</h2>
        <section>
            <ul>
                <li>DoDFMR Chapter 26</li>
                <li>Monthly allowance for housing</li>
                    <ul>
                        <li>Based on rank, dependency status, and location</li>
                        <li>When adequate housing is not furnished</li>
                        <li>BAH rates based on median housing costs and is paid independently of a member’s actual housing costs</li>
                        <li>Paid for housing in the U.S.</li>
                    </ul>
                <li>Not Payable</li>
                    <ul>
                        <li>Adequate quarters furnished for member and dependents</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 2: Research'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
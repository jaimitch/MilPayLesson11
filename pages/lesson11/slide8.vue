<template>
  <div>
      <h2>DoDFMR Vol 7A 510301</h2>
      <p>Deposit</p>
        <section>
            <ul>
                <li>Government sponsored, similar to a 401K</li>
                <li>Start, stop, or change any time</li>
                <li>Must be made though payroll deductions</li>
                <li>Percentage requirements</li>
                    <ul>
                        <li>Basic pay first (minimum of 1 percent)</li>
                        <li>Other pay second (incentive, special, and bonus)</li>
                        <li>If basic/inactive pay contributions stop, all other pay contributions will terminate</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Thrift Savings Plan (TSP) Guidelines'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
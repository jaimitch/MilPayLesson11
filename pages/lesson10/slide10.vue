<template>
  <div>
      <h2>DoDFMR Vol 7A 350202A2</h2>
        <section>
            <ul>
                <li>Leave accrued in a combat zone or qualified hazardous duty area</li>
                <li>One day in an eligible location qualifies all leave in that month to be CZTE leave</li>
                <li>CZTE leave days will be tax-exempt when used or sold</li>
                <li>First leave used</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'CZTE Leave'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
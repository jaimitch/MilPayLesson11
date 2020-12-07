<template>
  <div>
      <h2>DoDFMR Vol 7A 5103</h2>
      <p>Traditional</p>
        <section>
            <ul>
                <li>Contributions are Tax-deferred; withdrawals will be taxed</li>
                <li>Agency automatic and matching contributions are always tax-deferred</li>
        </section>
        <p>ROTH TSP</p>
        <section>
            <ul>
                <li>Contributions are taxed; withdrawals will not be taxed</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'TSP Guidelines cont.'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
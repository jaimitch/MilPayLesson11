<template>
  <div>
      <h2>DoDFMR Vol 7A 510402A</h2>
      <p>Catch-Up Contributions</p>
        <section>
            <ul>
                <li>Age 50 or older</li>
                <li>May contribute to both Roth and Traditional TSP accounts</li>
                <li>Cannot exceed annual limit</li>
                <li>Must be from basic pay</li>
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
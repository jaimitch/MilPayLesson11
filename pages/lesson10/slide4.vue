<template>
  <div>
      <h2>DoDFMR Vol 7A 4402</h2>
      <p><b>All pays and some fringe benefits</b></p>
      <p>Exclusions</p>
        <section>
            <ul>
                <li>Combat Zone Tax Exclusion</li>
                <li>Legal residents of Puerto Rico and Commonwealth of Northern Mariana Islands</li>
            </ul>
        </section>
        <p>Internal Revenue Service Publication 15-T (Employer's Tax Guide)</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Taxable amounts'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
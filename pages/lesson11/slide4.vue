<template>
  <div>
      <h2>DoDFMR Vol 7A 510205</h2>
      <p>Deposit</p>
        <section>
            <ul>
                <li>Maximum deposit is un-allotted current pay and allowances</li>
                <li>Minimum amount of $5</li>
                <li>May not deposit accumulated back pay</li>
                <li>Members in a missing status</li>
                <li>Deposit by allotment, cash, check, or Eagle Cash</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'SDP cont.'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
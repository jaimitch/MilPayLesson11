<template>
  <div>
      <p><b>Allows members to</b></p>
        <section>
            <ul>
                <li>Modify tax withholdings</li>
                <li>Adjust TSP contributions</li>
                <li>Access to Leave and Earnings Statements (LES)</li>
                <li>View Tax statements (W-2)</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'MyPay'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
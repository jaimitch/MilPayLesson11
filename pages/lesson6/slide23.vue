<template>
  <div>
      <h2>DoDFMR Vol 7A 260605</h2>
        <section>
            <ul>
                <li>Monthly rental amount, authorized up to the rental ceiling</li>
                <li>Monthly utility/recurring maintenance allowance payable based upon climate and utilities paid for each geographical area</li>
                <li>One-time lump-sum Move-In Housing Allowance</li>
                    <ul>
                        <li>MIHA Miscellaneous</li>
                        <li>MIHA Rent</li>
                        <li>MIHA Security</li>
                        <li>MIHA Infectious</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'OHA Payments'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>
    <p>Appendices</p>
    <p>A - Reimbursement of Adoption Expenses</p>
    <p>B - Disposition of Forfeitures and Fines as a Result of   Courts-Martial, Nonjudicial Punishment and Desertion</p>
    <p>C - Implementing Procedures for Mandatory Electronic Funds Transfer (EFT) of Military Pay</p>
    <p>Comparable grades</p>
    <p>Definitions</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'DoDFMR Vol 7A Other Sections'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
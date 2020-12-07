<template>
  <div>
    <p>4.  A Soldier must recertify their FSSA upon which of the following?
        <br>A.  Annually in February
        <br>B.  $100 raise in household  income
        <br>C.  Decrease in household size	
        <br>D. 	All of the above</p>
    <p>5.  When is BAS not payable during the following situations?
        <br>A.  During Basic Military Training (BMT)
        <br>B.  During OCS (unless continuous prior enlisted service)
        <br>C.  On Excess Leave or unauthorized absence	
        <br>D. 	All of the above</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Check on Learning'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
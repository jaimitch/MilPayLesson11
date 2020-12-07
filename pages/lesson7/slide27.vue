<template>
  <div>
<p>An E-6 with over 8 years of active military service has requested a 2 month Advance Pay for a PCS move. 
</p>
<img src="../../assets/lesson7/Advance_Pay_Computation.png" style="width:350px">
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Advance Payments Computation (Example)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
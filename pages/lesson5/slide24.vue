<template>
  <div>
img here
<p>
<b>Step 1:</b>  List and add all beginning dates of service for each separate period of service by year, month, day.
<br><br><b>Step 2:</b>  List and add all ending dates by year, month, day, changing 31st of the month to 30, or 28th in a non leap year changing to 30 Feb 29, change to Feb 30
<br>
<br>Important Note:  To begin computation, determine creditable service periods from the DA Form 1506
</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Computation of Creditable Service'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
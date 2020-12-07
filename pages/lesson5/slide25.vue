<template>
  <div>
    <p>
<b>Step 3: </b> Subtract the beginning dates total from the ending dates total and borrow as necessary    
</p>
img here
<p>
Conversion:
<br>90 days (30 days per month = 3 months)
<br>9 months (9 + 3 months = 12 months = 1 year)
<br>21 years (21+ 1 year = 22 years)0
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
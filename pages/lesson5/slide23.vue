<template>
  <div>
img here
<p>
<br>d. Item 4: Enter status and branch of the soldier who the computation is for.
<br>e. Item 5: Enter a check mark in the corresponding box which represents Service member’s grade category for each period of service.
<br>f. Item 6: Enter the two digit year, two digit month, and two digit day which represents the service member’s beginning date for each period of service.
<br>g. Item 7: Enter the ending date for each period of service in the same format the beginning date was entered.
<br>h. Item 8: Enter any Time Lost (if applicable).
<br>i. Item 9: Enter the total number of years, months, and days for each period of service.
</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Example DA 1506 with Data and Dates'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
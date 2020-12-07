<template>
  <div>

<h2>AWOL/Desertion</h2>
<ul>
<li>Loss of 1 days pay for each day</li>

<li>Loss of pay for the 31st if the first day of absence is the 31st  or paid on a daily rate</li>

<li>Absence on the last day of February; loss of pay through the 28, 29 and 30 during non leap year  </li>

<li>Duty less than 30 days, day-for-day</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Lost Time'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
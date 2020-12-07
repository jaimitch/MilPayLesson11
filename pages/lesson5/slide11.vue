<template>
  <div>
<h2>All months have 30 days</h2>
<ul>
<li>Change 31 to 30</li>
<li>Change 28 to 30 non-leap years</li>
<li>Change 29 to 30 leap years</li>
</ul>
<h2>All years have 12 months</h2>

<h2>A year has 360 days</h2>

<h2>1 inclusive day is added for each beginning day of service and pay</h2>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Rules for Pay and Creditable Service'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
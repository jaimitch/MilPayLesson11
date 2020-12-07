<template>
  <div>
    <h2>Factors Affecting Pay</h2>
    <ul>
      <li>Status</li>
      <li>Location</li>
      <li>Duty performed</li>
      <li>Grade</li>
      <li>Skill level</li>
      <li>Events</li>
    </ul>
      <h2>Master Military Pay Account (MMPA) / Defense Joint Military System (DJMS)</h2>
    <ul>
      <li>Created by an accession transaction; maintained for every member</li>
      <li>Contains all entitlements, deductions, allotments, collections, leave, and 5 years of historical data</li>
    </ul>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: `Military Pay`
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
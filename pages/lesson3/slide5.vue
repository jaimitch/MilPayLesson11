<template>
  <div>
    <h2>Regional Level Application Software (RLAS)</h2>
      <ul>
        <li>USAR Personnel and Pay system</li>
        <li>Feeds pay transactions to DJMS-RC</li>
        <li>Processes Inactive Duty Pay and AD pay of 1-29 days</li>
      </ul>
    <h2>Defense Joint Military Pay System Reserve Component (DJMS-RC)</h2>
      <ul>
        <li>Establish Reserve Soldier’s pay accounts</li>
        <li>Receives Pay data from RLAS</li>
        <li>Feeds Pay transactions to DFAS</li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Reserve Pay System'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
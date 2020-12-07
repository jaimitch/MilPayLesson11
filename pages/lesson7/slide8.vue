<template>
  <div>
<ul>
<li>Purpose</li>

<ul><li>Supports the Army’s belief that everyone has a responsibility to assist in the Army’s recruiting efforts and mission</li>

<li>Allows new Soldiers the opportunity to bridge the gap with America’s youth while telling their Army story in their community</li></ul>

<li>Rules</li>

<ul><li>Authorization from the O-5/ LTC in the Soldier’s chain of command</li>

<li>May be approved for a period of 14 days</li>

<li>No expense to the government; all expenses incurred by the Soldier</li></ul>
</ul>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'HRAP'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
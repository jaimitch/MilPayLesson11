<template>
  <div>
<ul>
<li>Define PCS</li>

<li>PCS Types</li>

<li>Permissive TDY </li>

<li>Travel Per Diem & Monetary Allowance in Lieu of Transportation (MALT)</li>

<li>Dislocation Allowance (DLA) </li>

<li>Temporary Lodging Expense (TLE)</li>

<li>Temporary Lodging Allowance (TLA)</li>

<li>Government Travel Charge Card (GTCC) </li>

<li>Advance Pay</li>
</ul>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Lesson Objectives'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
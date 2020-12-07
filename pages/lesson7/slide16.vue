<template>
  <div>

<p>JTR 0505</p>
<ul>
<li>Purpose</li>

<ul><li>Partially reimburse a member with or without dependent(s) for the expenses incurred in relocating the member’s household</li></ul>

<li>Rules</li>

<ul><li>PCS</li>

<li>On a housing move ordered for the Government convenience</li>

<li>Incident to an evacuation</li>

<li>Based on grade and dependency</li></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Dislocation Allowance (DLA)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>
<ul>
<li>Rate per mile for the authorized POV use during official PCS travel</li>

<li>MALT Rate effective 1 January 2020:  $0.17/mile</li>
</ul>
<p><i>
Example </i></p>
<ul>
<li>A Soldier PCSing from Fort Stewart to Fort Bragg. PCS leave is taken in Norfolk VA. The official distance is 302 miles</li>

<li>Fort Stewart to Fort Bragg (Mileage 302 x $0.17= $51.34)</li></ul>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'MALT'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
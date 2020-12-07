<template>
  <div>
    <ul>
<li>The Department of Defense’s focal point for</li>
<ul>
<li>Commercial travel</li>

<li>Central oversight for commercial travel management</li>

<li>Travel regulations, policies, and implementation</li>

<li>GTCC program management</li>

<li>Customer support and training</li>

<li>Functional oversight of the Defense Travel System (DTS)</li>

<li>Station and housing allowances program management</li>

<li>Allowance calculators</li></ul>
</ul>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Defense Travel Management Office Tool' 
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>

<h2>DoDFMR Vol 7A 010201 D</h2>
<ul>
<li>Service on a military retired list</li>

<li>Service terminated by desertion or dishonorable discharge</li>

<li>Service as an enlisted member in a Reserve Component (RC) in Delayed Entry Program before January 1985</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Creditable Service With Restrictions'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
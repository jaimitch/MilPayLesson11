<template>
  <div>
    <ol>
<li>A Soldier may start a maximum of ____ discretionary allotments at any given time.</li>

<li>True or False.  Non-discretionary allotments will continue for an indefinite period of time. </li>

<li>The chapter(s) of the DoDFMR, Volume 7A which contains information about the restrictions to allotments is chapter(s) _______.</li>
</ol>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Check on Learning'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
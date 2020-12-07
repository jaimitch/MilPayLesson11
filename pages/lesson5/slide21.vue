<template>
  <div>
<ul>
<li>Officers</li>
<ul>
<li>All creditable prior to 11 February 1996</li>
<li>Includes enlisted if a Reserve Commission was held</li>
</ul>
<li>Enlisted</li>
<ul>
<li>DoDFMR, Vol 7A, Chapter 1, Table 1-2, Absence From Duty in Enlisted Status </li></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Effects of Absences'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
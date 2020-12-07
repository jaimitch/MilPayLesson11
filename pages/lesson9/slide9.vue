<template>
  <div>
<h2>DoDFMR Vol 7A Chapter 17</h2>
<ul>
<li>HDP for Location (HDP-L)</li>

<li>HDP for Mission (HDP-M) </li>

<li>HDP for Tempo (HDP-T)</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Hardship Duty Pay (HDP)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
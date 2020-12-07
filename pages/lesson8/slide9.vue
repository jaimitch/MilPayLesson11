<template>
  <div>

<h2>DoDFMR Vol 7A Chapters 40 – 43</h2>
<ul>
<li>Types</li>

<ul><li>Discretionary</li>
<li>Non-discretionary</li></ul>

<li>Help manage personal and family finances</li>

<li>Authorized recipients</li>
<ul><li>Institutions</li>
<li>Other persons</li>
<li>Service members </li></ul>

<li>Member’s pay minus deductions</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Allotments'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
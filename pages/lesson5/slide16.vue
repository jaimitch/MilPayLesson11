<template>
  <div>
<h2>Creditable Service Without Restrictions</h2>
<ul><li>DoDFMR Vol 7A 010201 C</li></ul>

<h2>Other Creditable Service With Restrictions </h2>
<ul><li>DoDFMR Vol 7A 010201 D </li></ul>

<h2>Constructive Service</h2>
<ul><li>DoDFMR Vol 7A 010201 E</li></ul>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Types of Creditable Service'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
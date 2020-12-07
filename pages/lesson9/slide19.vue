<template>
  <div>
<h2>DoDFMR Vol 7A Ch 8</h2>
<ul>
<li>Enlisted members only </li>

<li>Grade E-3 and above</li>

<li>Duties designated by service secretary</li>

<li>Extremely difficult or unusual degree of responsibility</li>

<li>Requires annual certification</li>

<li>Automatically stops on anniversary date</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Special Duty Assignment Pay (SDAP)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
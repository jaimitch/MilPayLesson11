<template>
  <div>
<h2>DoDFMR Vol 7A 100403  </h2>
<ul>
<li>On leave or TDY outside IDP area</li>

   <li>Absent the entire month from IDP area</li>

   <li>In area solely for personal convenience</li>

   <li>When merely traveling through IDP area</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Effect of absences on IDP'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
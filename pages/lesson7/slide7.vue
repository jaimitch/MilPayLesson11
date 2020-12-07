<template>
  <div>
<ul>
<li>Hometown Recruiter Assistance Program (HRAP)</li>

<ul><li>AR 601-2 Army Recruiting Support Programs</li></ul>

<li>House hunting</li>

<ul><li>AR 600-8-10 Army Leave and Passes</li></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Permissive TDY (PTDY)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
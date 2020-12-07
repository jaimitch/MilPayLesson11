<template>
  <div>
    <ul>
<li>Cadets and Midshipmen </li>

<li>Assigned to a school or installation as a student, if the course of instruction is less than 20 weeks</li>

<li>A Reserve Component (RC) enlisted member called or ordered to initial active duty for training for less than 6 months.</li>

<li>Not covered</li>
<ul>
<li>Absentees</li>
<li>Discharges under other than honorable</li>
<li>Prisoners</li></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Special Categories of PCS'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
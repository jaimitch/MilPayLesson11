<template>
  <div>

<h2>Attendance is mandatory
</h2>
<ul>
<li>Place of duty</li>
<li>32 hours of training</li>
<li>Missed training: 2 hours</li>
</ul>
<h2>80% must be achieved to pass the final exam.</h2>
<h2> Certificate of Completion</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Course Standards'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
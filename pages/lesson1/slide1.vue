<template>
  <div>
    <h2>MILITARY PAY COURSE OVERVIEW</h2>

<p>We will discuss an overview of the course, schedule, standards, objectives, and the six step process for correcting a Soldier’s pay.
</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Military Pay Course Overview'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
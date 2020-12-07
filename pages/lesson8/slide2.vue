<template>
  <div>
    <ul>
<li>Explain the general provisions governing allotments</li>

<li>Explain the types of allotments</li>

<li>Outline eligibility requirements</li>

<li>Explain the effects on pay</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Lesson Objectives'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
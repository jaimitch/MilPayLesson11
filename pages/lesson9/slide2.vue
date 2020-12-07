<template>
  <div>
<ul>
  <li>Identify the types of special and incentive pay</li>

<li>Outline the eligibility requirements</li>

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
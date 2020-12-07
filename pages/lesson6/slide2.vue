<template>
  <div>
        <section>
            <ul>
                <li>Describe different types of allowances</li>
                <li>Outline eligibility requirements</li>
                <li>Navigate the Defense Travel Management Office (DTMO) website</li>
                <li>Explain the effects on pay</li>
            </ul>
        </section>
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
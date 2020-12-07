<template>
  <div>
        <section>
            <ul>
                <li>Summary of changes</li>
                <li>References</li>
                <li>Figures/Tables</li>
                <li>Definitions</li>
                <li>Chapters 1 through 68</li>
                <li>Appendices A through C</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Major Sections'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
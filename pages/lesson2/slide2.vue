<template>
  <div>
        <section>
            <ul>
                <li>Explain the purpose of the Department of Defense Financial Management Regulation (DoDFMR) and the Joint Travel Regulation (JTR)</li>
                <li>Describe the structure and search for changes in the DoDFMR Vol 7A and JTR</li>
                <li>Discuss and locate Military Pay E-Messages</li>
                <li>Learn how to read a Decision Logic Table (DLT)</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Learning Objective'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>


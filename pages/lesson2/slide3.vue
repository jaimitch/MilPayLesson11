<template>
  <div>
      <h2>Key word search</h2>
        <section>
            <ul>
                <li>Ctrl F</li>
                <li>Example: "Hostile Fire Pay", search "Hostile Fire"</li>
            </ul>
        </section>
      <h2>Use Table of Contents</h2>
        <section>
            <ul>
                <li>Select chapter relevent to subject</li>
                <li>Example: When searching for "DLA" review the Permanent Duty Travel chapter in the Table of Contents</li>
            </ul>
        </section>
      <h2>Process of Elimination</h2>
        <section>
            <ul>
                <li>Eliminate paragraphs and subparagraphs that does not pertain to your search</li>
                <li>Example: When searching for "BAH with dependent", eliminate "BAH without dependent" </li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'DoDFMR/JTR Research Tips'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
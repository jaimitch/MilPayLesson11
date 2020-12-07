<template>
  <div>
      <h2>Chapter changes are listed in the chapter introduction</h2>
        <section>
            <ul>
                <li>Table Heading</li>
                    <ul>
                        <li>Located at the top; identifies instruction and title</li>
                    </ul>
                <li>Column Heading</li>
                    <ul>
                        <li>Located below the table heading; read left to right; identifies column separation (Ex. A)</li>
                    </ul>
                <li>Condition and action statements</li>
                    <ul>
                        <li>Located below the column heading; read left to right; identifies conditions or actions</li>
                    </ul>
                <li>Rule lines</li>
                    <ul>
                        <li>Located in the far left column; read vertically; identifies rules (Ex.1, 2, 3, etc.)</li>
                    </ul>
                <li>Note:</li>
                    <ul>
                        <li>Located at the end of each table; clarifying and elaborating information on rules</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'DoDFMR and JTR DLTs'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
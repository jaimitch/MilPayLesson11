<template>
  <div>
      <h2>Chapter changes are listed in the chapter introduction</h2>
        <section>
            <ul>
                <li>Paragraph changes</li>
                    <ul>
                        <li>Indicated by blue font</li>
                        <li>Significant changes are proceeded by a blue asterisk</li>
                    </ul>
                <li>Changes to the DoDFMR include</li>
                    <ul>
                        <li>Archives</li>
                        <li>Military pay policy messages</li>
                    </ul>
                <li>DoDFMR schedule updates will provide</li>
                    <ul>
                        <li>Reformatting</li>
                        <li>Recent changes and revisions</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Revisions'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>
        <section>
            <ul>
                <li>Provides policies, regulations and procedures</li>
                <li>Responsibility of the Under Secretary of Defense (Comptroller) (USD(C))</li>
                <li>Statutory (U.S. Law)</li>
                <li>Volumes 1 through 16 contain</li>
                    <ul>
                        <li>Recent changes</li>
                        <li>Policy memorandums</li>
                        <li>Chapters in eCoordination</li>
                        <li>Archives</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Introduction to the DoDFMR 7000.14-R'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>
        <section>
            <ul>
                <li>DA Form 5960 (Authorization to start, stop or change BAH)</li>
                <li>DD Form 2367 (Authorization to start, stop or change OHA)</li>
                <li>Marriage certificate</li>
                <li>Divorce decree</li>
                <li>Birth certificates</li>
                <li>Adoption papers</li>
                <li>Lease (If Applicable)</li>
                <li>Court orders</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'KSD'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
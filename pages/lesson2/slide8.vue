<template>
  <div>
        <section>
            <ol>
                <li>What chapter and section is “COMPUTATION OF PAY” located in the DoDFMR Vol 7A?</li>
                <li>Where can you find “When Entitled to Basic Pay”?</li>
            </ol>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Check on Learning'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
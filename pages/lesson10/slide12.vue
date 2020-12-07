<template>
  <div>
        <section>
            <ol>
                <li>The Chapter of the DODFMR that covers Income Tax Withholding is? ____</li>
                <li>The highest amount of CZTE pay an Army officer can be granted is up to the ______ pay, plus HFP/IDP.</li>
                <li>______ is the system that a Soldier would use to get an electronic W-2.</li>
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
<template>
  <div>
        <section>
            <ol>
                <li>TA member has the option to make __________ or _____ TSP contributions. (DoDFMR Vol 7A 510301A)</li>
                <li>In order to make TSP contributions from bonuses, incentive pays, or special pays, 
                    a member must contribute at least ___ percent of ______ pay.  (DoDFMR Vol 7A 510301E)</li>
                <li>True or False: Catch-up contributions must be made from special pay.  False  (DoDFMR Vol 7A 510307A)</li>
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
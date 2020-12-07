<template>
  <div>
      <h2>DoDFMR Vol 7A 510401</h2>
      <p>Eligibility</p>
        <section>
            <ul>
                <li>Auto-Enrolled BRS Member</li>
                    <ul>
                        <li>Date of Initial Entry into Military Service (DIEMS) on or after January 1, 2018</li>
                    </ul>
                <li>BRS Opt-In Member</li>
                <ul>
                    <li>Member who elected to enroll in accordance with procedures outlined in the 
                        Deputy Secretary of Defense Memo, dated January 27, 2017</li>
                </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'TSP for BRS Members'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
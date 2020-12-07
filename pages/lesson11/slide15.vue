<template>
  <div>
      <h2>DoDFMR Vol 7A 510404C</h2>
      <p>Annual Re-Enrollment Requirement</p>
      <section>
          <ul>
              <li>If member stops contributions</li>
              <ul>
                  <li>Re-enrolled on January 1st</li>
                  <li>3 percent basic/inactive duty pay</li>
              </ul>
              <li>May decline annual re-enrollment for the following year no earlier than December 1st </li>
          </ul>
      </section>
      <p>Exception:  Member’s whose contributions stopped due to maximum annual limit reached.</p>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Auto-Enrolled BRS Member cont.'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
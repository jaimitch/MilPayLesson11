<template>
  <div>
      <section>
          <ol>
              <li>After ____ months of service, a member under BRS can receive up to 4 percent of agency matching contributions.  (DoDFMR Vol 7A 510405B1)</li>
              <li>True or False. A BRS member will receive the agency automatic 1 percent even if the member is not making any contributions from their basic pay.  True  (DoDFMR Vol 7A 510405A1)</li>
              <li>True or False.  Members not under BRS are authorized agency matching contributions.  False (DoDFMR Vol 7A 510501)</li>
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
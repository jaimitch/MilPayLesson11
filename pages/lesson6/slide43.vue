<template>
  <div>
    <p>1.  There are ____basic types of clothing allowances.</p>
    <p>2.  How many types of Cash Clothing Replacement are there, what are they, and when are they payable?</p>
    <p>3.  What documentation is needed for Family Separation Allowance-T?</p>
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
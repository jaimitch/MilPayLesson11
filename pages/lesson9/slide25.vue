<template>
  <div>
<ol>
  <li>The maximum monthly amount of AIP will not exceed
       ______</li>

<li>Who establishes the eligibility criteria for SDAP?</li>
 <li>True or False:  The Secretary concern may pay FLPB to an AC member who is assigned to military duties requiring a proficiency in a foreign language.</li>

 </ol>

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
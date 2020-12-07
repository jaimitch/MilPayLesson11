<template>
  <div>
    <ul>
      <li>Step 1 - Pay Inquiry</li>

      <li>Step 2 - Research Entitlement </li>

      <li>Step 3 - Key Supporting Document (KSD)</li>

      <li>Step 4 - Unit Transmittal Letter (UTL)</li>

      <li>Step 5 - Daily Register of Transactions (DROT)</li> 

      <li>Step 6 - Certify Unit Commander’s Finance Report (UCFR) </li>

	
    </ul>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Military Pay Process'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
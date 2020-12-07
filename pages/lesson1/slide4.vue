<template>
  <div>
<h2>Purpose</h2>
<p>Human Resources (HR) Professionals will be trained to research and answer pay inquiries involving HR transactions that trigger pay; to perform tasks as the front-end owner of HR transactions in the Integrated Personnel and Pay System-Army (IPPS-A)
</p>
<h2>HR Professionals Will Perform the Following:</h2>
<ul>
  <li>Receive and answer pay inquiries</li>
  <li>Research finance regulations</li>
  <li>Determine entitlement to pay and allowances</li>
  <li>Explain effects that changes pay</li>
  <li>Review Key Supporting Document (KSD)</li>
  <li>Review Unit Commander's Finance Report (UCFR)</li>
  <li>Conduct Unit level Military Pay Fundamentals training</li>
</ul>
  </div>
</template>


<script>

export default {
  data() {
    return {
      title: 'Objective'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
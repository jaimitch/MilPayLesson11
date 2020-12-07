<template>
  <div>
        <section>
            <ul>
                <li>Describe types of tax withholdings</li>
                <li>Outline eligibility requirements for tax deductions</li>
                <li>Describe wages not subject to withholding</li>
                <li>Federal Insurance Contributions Act</li>
                <li>Combat Zone Tax Exclusion (CZTE)</li>
                <li>Benefits of MyPay</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Lesson Objectives'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
<template>
  <div>
      <h2>DoDFMR Vol 7A 2502</h2>
        <section>
            <ul>
                <li>BAS is meant to offset the cost of meals. BAS is not intended to cover the costs of meals for family members</li>
                <li>BAS entitlement is paid at a monthly rate. Effective Jan 1, 2020 rates are as follows</li>
                    <ul>
                        <li>Officers $256.68</li>
                        <li>Enlisted (standard) $372.71</li>
                    </ul>
                <li>Not Payable</li>
                    <ul>
                        <li>Basic Military Training and Officer Candidate School (OCS)</li>
                        <li>Excess leave or unauthorized absence</li>
                        <li>Approved educational leave</li>
                        <li>Court-martial sentence and/or confinement</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Basic Allowance for Subsistence (BAS)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
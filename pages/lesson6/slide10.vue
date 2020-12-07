<template>
  <div>
        <section>
            <ul>
                <li>Allowances</li>
                    <ul>
                        <li>Based on Soldier’s entitlement</li>
                        <li>Non taxable</li>
                        <li>Normally ends with the word “allowance”</li>
                    </ul>
                <li>Pay</li>
                    <ul>
                        <li>Based on Soldier’s status</li>
                        <li>Taxable under most circumstances</li>
                        <li>Normally ends with the word “pay”</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Allowances vs. Pay'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>
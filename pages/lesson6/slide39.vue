<template>
  <div>
      <h2>DoDFMR Vol 7A 2902</h2>
        <section>
            <ul>
                <li>3 basic types of clothing allowances:</li>
                    <ul>
                        <li>Initial Clothing Allowance received upon initial enlistment</li>
                            <ul>
                                <li>Standard</li>
                                <li>Special</li>
                                <li>Partial</li>
                            </ul>
                        <li>Cash Clothing Replacement Allowance received upon anniversary month</li>
                        <li>Extra Clothing Allowance covers unusual circumstances</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Clothing Monetary Allowance'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>